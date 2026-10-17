import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    
    if (!file || typeof file === 'string' || file.size === 0) {
      return NextResponse.json({ success: false, error: 'No valid file provided' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const cleanName = (file.name || 'upload').replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${Date.now()}-${cleanName}`;
    const filePath = path.join(uploadDir, filename);

    const bytes = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(bytes));

    return NextResponse.json({
      success: true,
      url: `/uploads/${filename}`,
      filename,
      size: file.size,
    });
  } catch (err: any) {
    console.error('API /api/upload error:', err);
    return NextResponse.json({ success: false, error: err.message || 'File upload failed' }, { status: 500 });
  }
}
