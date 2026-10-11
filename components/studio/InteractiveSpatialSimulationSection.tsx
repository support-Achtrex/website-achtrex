'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Interactive3DViewport, ThreeDSceneMode } from './Interactive3DViewport';

export interface SpatialSimulationStream {
  id: string;
  number: string;
  title: string;
  serviceCategory: string;
  videoSrc: string;
  posterSrc: string;
  fps: string;
  latency: string;
  description: string;
}

const HERO_SIMULATION_STREAMS: SpatialSimulationStream[] = [
  {
    id: 'form-customizer',
    number: '01',
    title: 'Real-Time 3D Product Customizer',
    serviceCategory: 'Product Configuration & Customization',
    videoSrc: '/hero-videos/form-customizer-cover.mp4',
    posterSrc: '/studio-assets/preview-form.jpg',
    fps: '60 FPS',
    latency: '11.2ms',
    description: 'Interactive 3D configurator with tactile material swatches, assembly exploded views, and real-time physical lighting.',
  },
  {
    id: 'ai-copilot',
    number: '02',
    title: 'Autonomous AI Copilot & Knowledge Surface',
    serviceCategory: 'Artificial Intelligence Development',
    videoSrc: '/hero-videos/lumen-intelligent-cover.mp4',
    posterSrc: '/studio-assets/preview-lumen.jpg',
    fps: '60 FPS',
    latency: '9.8ms',
    description: 'High-velocity token processing engine, streaming neural telemetry, and autonomous multi-agent orchestration.',
  },
  {
    id: 'after-dark',
    number: '03',
    title: 'Nocturnal CGI & Immersive World',
    serviceCategory: 'CGI, 3D & Immersive Experiences',
    videoSrc: '/hero-videos/after-dark-cover.mp4',
    posterSrc: '/studio-assets/preview-afterdark.jpg',
    fps: '25 FPS HDR',
    latency: '12.0ms',
    description: 'Cinematic ray-traced automotive visualizer with volumetric atmospheric scattering and physical camera optics.',
  },
  {
    id: 'aura-vehicle',
    number: '04',
    title: 'Spatial Vehicle & Fluid Dynamics',
    serviceCategory: 'Digital Products & Spatial Engineering',
    videoSrc: '/hero-videos/aura-vehicle-cover.mp4',
    posterSrc: '/studio-assets/preview-aura.jpg',
    fps: '30 FPS',
    latency: '10.5ms',
    description: 'Real-time vehicle dynamics with procedural aerodynamic streamlines and orbital camera choreography.',
  },
];

interface InteractiveSpatialSimulationSectionProps {
  sceneMode?: ThreeDSceneMode;
  projectTitle?: string;
}

export function InteractiveSpatialSimulationSection({
  sceneMode = 'general',
  projectTitle = 'Spatial Experience',
}: InteractiveSpatialSimulationSectionProps) {
  const [viewportMode, setViewportMode] = useState<'3d-orbital' | 'live-stream'>('live-stream');
  const [activeStreamId, setActiveStreamId] = useState<string>('form-customizer');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeStream =
    HERO_SIMULATION_STREAMS.find((s) => s.id === activeStreamId) || HERO_SIMULATION_STREAMS[0];

  const handleSelectStream = (id: string) => {
    setActiveStreamId(id);
    setViewportMode('live-stream');
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!mainVideoRef.current) return;
    if (mainVideoRef.current.paused) {
      mainVideoRef.current.play();
      setIsPlaying(true);
    } else {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !mainVideoRef.current.muted;
    setIsMuted(mainVideoRef.current.muted);
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 font-clash">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
              Real-Time 3D Engine &bull; Orbital Canvas &bull; Multi-Channel Matrix
            </span>
            <h3 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Interactive Spatial Simulation
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-white/60 max-w-md font-light leading-relaxed">
              Orbital 3D spatial simulation responding dynamically to user input. Select any live stream below to inspect the real-time physics and shaders.
            </p>
            {/* Viewport Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-white/15 shrink-0 font-mono text-xs">
              <button
                onClick={() => setViewportMode('live-stream')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  viewportMode === 'live-stream'
                    ? 'bg-white text-black font-medium'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                LIVE SIMULATION FEED
              </button>
              <button
                onClick={() => setViewportMode('3d-orbital')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  viewportMode === '3d-orbital'
                    ? 'bg-white text-black font-medium'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                3D ORBITAL VIEWPORT
              </button>
            </div>
          </div>
        </div>

        {/* Primary Interactive Viewport */}
        <div className="relative w-full h-[520px] sm:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 mb-12 shadow-2xl">
          {viewportMode === '3d-orbital' ? (
            <div className="w-full h-full relative">
              <Interactive3DViewport mode={sceneMode} className="w-full h-full" />
              {/* Telemetry Overlay for 3D Viewport */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[11px] text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Real-Time 60fps Three.js WebGL Active</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <video
                ref={mainVideoRef}
                key={activeStream.videoSrc}
                src={activeStream.videoSrc}
                poster={activeStream.posterSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Viewport Top HUD Badge */}
              <div className="absolute top-6 left-6 z-10 flex flex-wrap items-center gap-3 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 font-mono text-xs text-white">
                  CHANNEL {activeStream.number}: {activeStream.title}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-xs text-cyan-300">
                  {activeStream.fps}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-xs text-emerald-400">
                  LATENCY: {activeStream.latency}
                </span>
              </div>

              {/* Bottom Telemetry & Controls */}
              <div className="absolute bottom-6 inset-x-6 z-10 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/80">
                    STREAM ACTIVE &bull; {activeStream.serviceCategory}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  >
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  >
                    {isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Spatial Simulation Grid (Homepage Hero Videos Matrix) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#67e8f9] block mb-1">
                Multi-Channel Matrix Feeds
              </span>
              <h4 className="font-clash text-xl sm:text-2xl text-white font-normal">
                Live Spatial Simulation Grid
              </h4>
            </div>
            <span className="font-mono text-xs text-white/50 hidden sm:inline">
              Click any channel to engage into master viewport
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HERO_SIMULATION_STREAMS.map((stream) => {
              const isSelected = activeStreamId === stream.id && viewportMode === 'live-stream';

              return (
                <div
                  key={stream.id}
                  onClick={() => handleSelectStream(stream.id)}
                  className={`group relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 bg-neutral-950 flex flex-col justify-between ${
                    isSelected
                      ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-xl'
                      : 'border-white/10 hover:border-white/30 hover:scale-[1.02]'
                  }`}
                >
                  {/* Aspect Ratio Video Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <video
                      src={stream.videoSrc}
                      poster={stream.posterSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-white">
                        CHANNEL {stream.number}
                      </span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-md border ${
                          isSelected
                            ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/50'
                            : 'bg-black/60 text-emerald-400 border-white/10'
                        }`}
                      >
                        {isSelected ? 'ACTIVE STREAM' : stream.fps}
                      </span>
                    </div>

                    {/* Hover Engage Pill */}
                    <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-white text-black font-medium shadow-md">
                        ENGAGE &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Editorial Card Description */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-gradient-to-b from-neutral-950 to-black space-y-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#67e8f9] block mb-1">
                        {stream.serviceCategory}
                      </span>
                      <h5 className="font-clash text-base text-white font-medium group-hover:text-cyan-300 transition-colors leading-snug">
                        {stream.title}
                      </h5>
                    </div>

                    <p className="text-xs text-white/70 font-light line-clamp-2 leading-relaxed">
                      {stream.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50">
                      <span>LATENCY: {stream.latency}</span>
                      <span className="text-emerald-400">&bull; ONLINE</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
