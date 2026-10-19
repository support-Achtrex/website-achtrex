'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface CaseStudyVideoPlayerProps {
  id: string;
  vimeoId?: string;
  videoSrc?: string;
  poster: string;
  title: string;
  className?: string;
}

export function CaseStudyVideoPlayer({
  id,
  vimeoId = '927118579',
  videoSrc,
  poster,
  title,
  className = '',
}: CaseStudyVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVolumeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
  };

  return (
    <div
      id={id}
      className={`group relative w-full aspect-video bg-neutral-950 overflow-hidden ${className}`}
    >
      {/* Volume / Mute Toggle Button in Top Right */}
      <button
        onClick={handleVolumeToggle}
        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
      >
        {isMuted ? (
          <svg
            className="w-5 h-5 text-white/90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-white/90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"
            />
          </svg>
        )}
      </button>

      {/* Video Content: Vimeo Embed or Direct MP4 */}
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          muted={isMuted}
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        isPlaying && (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=${
              isMuted ? 1 : 0
            }&color=ffffff&title=0&byline=0&portrait=0&badge=0&autopause=0`}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )
      )}

      {/* Play Layer & Poster Overlay */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-700 pointer-events-auto ${
          isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Image
          src={poster}
          alt={title}
          fill
          sizes="(max-width: 1200px) 100vw, 1720px"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500" />

        {/* Centered Large Play Button (Matching Wedoo Reference) */}
        <button
          onClick={handlePlayClick}
          aria-label={`Play ${title}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-6 sm:gap-9 cursor-pointer group-hover:scale-105 transition-transform duration-300 focus:outline-none"
        >
          {/* White Polygon Play Icon */}
          <div className="w-8 sm:w-10 md:w-12 h-10 sm:h-12 md:h-16 flex items-center justify-center filter drop-shadow-lg">
            <svg
              viewBox="0 0 88.05 117.08"
              className="w-full h-full fill-white"
              aria-hidden="true"
            >
              <polygon points="0,117.08 88.05,58.54 0,0" />
            </svg>
          </div>

          {/* Outlined "Play" Editorial Typography */}
          <span className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase outline-text-white drop-shadow-md select-none">
            Play
          </span>
        </button>
      </div>
    </div>
  );
}
