import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const MIME_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.m4v': 'video/mp4',
  '.mov': 'video/quicktime',
  '.pdf': 'application/pdf',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: segments } = await params;
    if (!segments || segments.length === 0) {
      return new NextResponse('File path not provided', { status: 404 });
    }

    // Sanitize path to prevent directory traversal
    const safeSegments = segments.map((s) => s.replace(/\.\./g, ''));
    const filePath = path.join(process.cwd(), 'public', 'uploads', ...safeSegments);

    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }

    const stat = fs.statSync(filePath);
    if (!stat.isFile()) {
      return new NextResponse('Target is not a file', { status: 400 });
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Support range requests for video streaming
    const range = request.headers.get('range');
    if (range && (contentType.startsWith('video/') || contentType.startsWith('audio/'))) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      const chunksize = end - start + 1;

      const fileStream = fs.createReadStream(filePath, { start, end });
      const webStream = new ReadableStream({
        start(controller) {
          fileStream.on('data', (chunk) => controller.enqueue(chunk));
          fileStream.on('end', () => controller.close());
          fileStream.on('error', (err) => controller.error(err));
        },
      });

      return new NextResponse(webStream as any, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${stat.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize.toString(),
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }

    const fileStream = fs.createReadStream(filePath);
    const webStream = new ReadableStream({
      start(controller) {
        fileStream.on('data', (chunk) => controller.enqueue(chunk));
        fileStream.on('end', () => controller.close());
        fileStream.on('error', (err) => controller.error(err));
      },
    });

    return new NextResponse(webStream as any, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': stat.size.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err: any) {
    return new NextResponse(`Error reading uploaded file: ${err.message}`, { status: 500 });
  }
}
