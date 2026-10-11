'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConceptLiveExperienceProps {
  slug: string;
  title: string;
  industry: string;
  category: string;
}

export function ConceptLiveExperience({
  slug,
  title,
  industry,
  category,
}: ConceptLiveExperienceProps) {
  return (
    <section className="relative w-full py-20 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#020202] text-white overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#575bc8]/10 via-[#2d2f70]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-[1720px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-3">
              Concept Demonstration / Interactive Surface
            </div>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.08]">
              Live Experience Surface
            </h2>
            <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-3 max-w-2xl leading-relaxed">
              Interact directly with the functional prototype below. This is not a static mockup: it is an active demonstration of the software architecture and interaction craft Achtrex engineers for real client commissions.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-white/60">
            <div>
              <span className="text-white/40">Domain: </span>
              <span className="text-white font-medium">{industry}</span>
            </div>
            <div>
              <span className="text-white/40">Environment: </span>
              <span className="text-white font-medium">Interactive Prototype</span>
            </div>
          </div>
        </div>

        {/* Dynamic Concept Interactive Console based on Slug */}
        <div className="pt-12">
          {slug === 'automotive-spatial-configurator' && <SpatialConfiguratorEngine initialStream="conveyor" />}
          {slug === 'realtime-product-customizer' && <SpatialConfiguratorEngine initialStream="monolith" />}
          {slug === 'architectural-spatial-experience' && <ArchitecturalSpatialSimulator />}
          {slug === 'intelligent-copilot-interface' && <AutonomousAiCopilotSimulator />}
          {slug === 'interactive-storytelling-campaign' && <KineticStorytellingSimulator />}
          {slug === 'intelligent-clinical-platform' && <ClinicalPlatformSimulator />}
          {slug === 'connected-hospitality-platform' && <HospitalityJourneySimulator />}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 1. SPATIAL CONFIGURATOR ENGINE (POWERED BY USER ASSETS)
// Assets:
// - 008df38e-0aeb09d1.m4v: Architectural Spatial Installation & Fluid LED Monolith
// - b2311f23-aac2f772.m4v: Industrial Conveyor Twin & Automated Sorting Simulator
// - 7e05b651-f1f6f2fe.m4v: Generative Kinetic Particle Physics & Amber Simulation
// =========================================================================

type SpatialStreamId = 'monolith' | 'conveyor' | 'kinetic';

interface SpatialStreamConfig {
  id: SpatialStreamId;
  label: string;
  badge: string;
  title: string;
  assetCode: string;
  videoSrc: string;
  posterSrc: string;
  resolution: string;
  frameRate: string;
  pipeline: string;
  category: string;
  description: string;
}

const SPATIAL_STREAMS: Record<SpatialStreamId, SpatialStreamConfig> = {
  monolith: {
    id: 'monolith',
    label: '01 • Architectural Monolith',
    badge: 'ARCHITECTURAL HUD',
    title: 'Spatial Installation & Fluid LED Monolith',
    assetCode: '008df38e-0aeb09d1',
    videoSrc: '/studio-assets/video-spatial-installation.mp4',
    posterSrc: '/studio-assets/preview-008df38e.jpg',
    resolution: '3840 x 2160 UHD',
    frameRate: '25 FPS Progressive',
    pipeline: 'Volumetric Fluid Dynamics & 8K Monolithic LED Array',
    category: 'Architecture & Spatial Computing',
    description: 'Physical pavilion installation featuring fluid wave dynamics rendered across a large-scale architectural LED screen with dynamic light reflectance.',
  },
  conveyor: {
    id: 'conveyor',
    label: '02 • Conveyor Digital Twin',
    badge: 'LOGISTICS TWIN',
    title: 'Automated Conveyor Twin & Sorting Simulator',
    assetCode: 'b2311f23-aac2f772',
    videoSrc: '/studio-assets/video-conveyor-customizer.mp4',
    posterSrc: '/studio-assets/preview-b2311f23-4s.jpg',
    resolution: '1920 x 1080 FHD',
    frameRate: '30 FPS Progressive',
    pipeline: 'Industrial Digital Twin & Optical Routing Logic',
    category: 'Industrial Automation & Customization',
    description: 'Autonomous showroom conveyor sorting simulator with optical package recognition, barcode telemetry, and real-time belt mechanics.',
  },
  kinetic: {
    id: 'kinetic',
    label: '03 • Kinetic Particle Physics',
    badge: 'GENERATIVE PHYSICS',
    title: 'Generative Kinetic Particle & Amber Physics Engine',
    assetCode: '7e05b651-f1f6f2fe',
    videoSrc: '/studio-assets/video-kinetic-sculpture.mp4',
    posterSrc: '/studio-assets/preview-7e05b651.jpg',
    resolution: '1080 x 1350 HD',
    frameRate: '30 FPS Orbital',
    pipeline: '250,000 N-Body Particle Physics & Amber Raymarching',
    category: 'Generative 3D & Particle Systems',
    description: 'Orbital particle physics simulation rendering luminous amber matter with real-time gravitational clustering and volumetric light scattering.',
  },
};

export function SpatialConfiguratorEngine({
  initialStream = 'conveyor',
}: {
  initialStream?: SpatialStreamId;
}) {
  const [activeStreamId, setActiveStreamId] = useState<SpatialStreamId>(initialStream);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [filterMode, setFilterMode] = useState<'pbr' | 'scanline' | 'specular' | 'amber'>('pbr');
  const [showSpecModal, setShowSpecModal] = useState(false);

  // Monolith parameters
  const [fluidWaveVelocity, setFluidWaveVelocity] = useState(1.8);
  const [ledLuminance, setLedLuminance] = useState(2400);
  const [spatialAudioMode, setSpatialAudioMode] = useState<'binaural' | 'stereo'>('binaural');

  // Conveyor parameters
  const [conveyorVelocity, setConveyorVelocity] = useState(2.8);
  const [opticalGateSensitivity, setOpticalGateSensitivity] = useState<'standard' | 'high-speed'>('high-speed');
  const [routingChute, setRoutingChute] = useState<'dual-route' | 'express'>('dual-route');

  // Kinetic parameters
  const [particleDensity, setParticleDensity] = useState(250); // in thousands
  const [kelvinTemp, setKelvinTemp] = useState(3200);
  const [gravityTurbulence, setGravityTurbulence] = useState(65);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeStream = SPATIAL_STREAMS[activeStreamId];

  // Update playback speed when state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed, activeStreamId]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Determine dynamic CSS filter based on filterMode
  const getFilterStyle = () => {
    switch (filterMode) {
      case 'scanline':
        return 'contrast(1.15) brightness(1.05)';
      case 'specular':
        return 'contrast(1.4) grayscale(0.85) brightness(0.95)';
      case 'amber':
        return 'contrast(1.1) sepia(0.35) saturate(1.4)';
      default:
        return 'contrast(1.02) brightness(1.0)';
    }
  };

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      {/* Top Configurator Header Bar */}
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/70 backdrop-blur-md gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-white/80 tracking-widest uppercase">
              ACHTREX SPATIAL ENGINE V4
            </span>
          </div>
          <span className="hidden sm:inline-block w-[1px] h-4 bg-white/20" />
          <span className="font-clash text-sm text-white/90 hidden sm:inline">
            Spatial Configurator Engine
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="text-right hidden md:block">
            <span className="block font-mono text-[10px] text-white/50 uppercase tracking-widest">
              TELEMETRY STATE
            </span>
            <span className="font-mono text-xs sm:text-sm text-emerald-400 font-medium">
              HARDWARE PBR ACTIVE &bull; 60 FPS
            </span>
          </div>
          <button
            onClick={() => setShowSpecModal(true)}
            className="px-4 py-2 rounded-full bg-white text-black font-clash text-xs font-medium hover:bg-neutral-200 transition-colors shadow-md"
          >
            Export Spec Sheet &rarr;
          </button>
        </div>
      </div>

      {/* Stream Switcher Navigation Strip */}
      <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-black/40 border-b border-white/10 overflow-x-auto no-scrollbar font-mono text-xs">
        <span className="text-white/40 uppercase tracking-wider text-[11px] shrink-0 pl-2">
          ENGINE CHANNEL:
        </span>
        {(Object.keys(SPATIAL_STREAMS) as SpatialStreamId[]).map((streamKey) => {
          const stream = SPATIAL_STREAMS[streamKey];
          const isActive = activeStreamId === streamKey;
          return (
            <button
              key={streamKey}
              onClick={() => setActiveStreamId(streamKey)}
              className={`px-3.5 py-1.5 rounded-lg border flex items-center gap-2 transition-all shrink-0 ${
                isActive
                  ? 'border-white bg-white/15 text-white font-medium shadow-sm'
                  : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? 'bg-cyan-400 animate-pulse' : 'bg-white/30'
                }`}
              />
              <span>{stream.label}</span>
              <span className="text-[10px] text-white/40 font-mono hidden sm:inline">
                [{stream.assetCode}]
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Viewport + Live Interactive Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Visual Simulated Canvas Zone (Video Viewport) */}
        <div className="lg:col-span-8 relative flex flex-col justify-between overflow-hidden bg-black p-4 sm:p-6">
          {/* Main Video Viewport Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 my-auto shadow-2xl">
            <video
              ref={videoRef}
              key={activeStream.videoSrc}
              src={activeStream.videoSrc}
              poster={activeStream.posterSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              style={{ filter: getFilterStyle() }}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Optional Scanlines Simulation Overlay */}
            {filterMode === 'scanline' && (
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-75" />
            )}

            {/* Viewport Top HUD Badge */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/20 font-mono text-[11px] text-white">
                {activeStream.badge}
              </span>
              <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15 font-mono text-[10px] text-cyan-300">
                {activeStream.resolution}
              </span>
              <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15 font-mono text-[10px] text-emerald-400">
                {activeStream.frameRate}
              </span>
            </div>

            {/* Viewport Top Right Stream Telemetry */}
            <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:block">
              <div className="px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[10px] text-right text-white/80 space-y-0.5">
                <div>PIPELINE: <strong className="text-cyan-300">HARDWARE PBR</strong></div>
                <div>FRAME TIME: <strong className="text-emerald-400">11.4 MS</strong></div>
              </div>
            </div>

            {/* Bottom HUD Bar inside Viewport */}
            <div className="absolute bottom-4 inset-x-4 z-10 flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/15">
              {/* Transport Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs text-white transition-colors"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <button
                  onClick={toggleMute}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs text-white transition-colors"
                >
                  {isMuted ? 'UNMUTE' : 'MUTE'}
                </button>
                <div className="hidden sm:flex items-center gap-1 pl-2 border-l border-white/20 font-mono text-[11px] text-white/70">
                  <span>SPEED:</span>
                  {[0.5, 1.0, 1.5].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setPlaybackSpeed(spd)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        playbackSpeed === spd
                          ? 'bg-white text-black font-semibold'
                          : 'bg-white/5 hover:bg-white/15 text-white/70'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Viewport Filter Modes */}
              <div className="flex items-center gap-1 font-mono text-[11px]">
                <span className="text-white/50 mr-1 hidden sm:inline">FILTER:</span>
                {[
                  { id: 'pbr', label: 'PBR' },
                  { id: 'scanline', label: 'SCANLINE' },
                  { id: 'specular', label: 'SPECULAR' },
                  { id: 'amber', label: 'AMBER' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterMode(f.id as any)}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      filterMode === f.id
                        ? 'bg-cyan-400 text-black font-semibold'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-Viewport Information Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 font-mono text-xs text-white/70">
            <div>
              <span className="text-white/40">SOURCE ASSET: </span>
              <span className="text-white">{activeStream.assetCode}.m4v</span>
            </div>
            <div>
              <span className="text-white/40">RENDER MESH: </span>
              <span className="text-emerald-400">{activeStream.pipeline}</span>
            </div>
          </div>
        </div>

        {/* Right Configuration Palette Column */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-8 font-clash">
          {/* Active Concept Identity */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 block mb-1">
              Active Simulation Node
            </span>
            <h4 className="text-xl sm:text-2xl text-white font-normal leading-tight">
              {activeStream.title}
            </h4>
            <p className="text-xs text-white/70 font-light mt-2 leading-relaxed">
              {activeStream.description}
            </p>
          </div>

          {/* Interactive Parameters based on active stream */}
          {activeStreamId === 'monolith' && (
            <div className="space-y-6 border-t border-white/10 pt-6">
              {/* Wave Velocity */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-white/70">Wave Fluid Energy:</span>
                  <span className="text-cyan-300 font-semibold">{fluidWaveVelocity} m/s</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={3.5}
                  step={0.1}
                  value={fluidWaveVelocity}
                  onChange={(e) => setFluidWaveVelocity(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* LED Luminance */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-white/70">Monolith LED Luminance:</span>
                  <span className="text-amber-300 font-semibold">{ledLuminance} nits</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={4500}
                  step={100}
                  value={ledLuminance}
                  onChange={(e) => setLedLuminance(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Spatial Audio Mode */}
              <div>
                <span className="font-mono text-xs text-white/70 block mb-2 uppercase">
                  Spatial Soundscape Mode:
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {(['binaural', 'stereo'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSpatialAudioMode(mode)}
                      className={`py-2 px-3 rounded-lg border transition-colors ${
                        spatialAudioMode === mode
                          ? 'border-white bg-white/15 text-white font-medium'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {mode.toUpperCase()} ACOUSTICS
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeStreamId === 'conveyor' && (
            <div className="space-y-6 border-t border-white/10 pt-6">
              {/* Conveyor Velocity */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-white/70">Belt Linear Velocity:</span>
                  <span className="text-cyan-300 font-semibold">{conveyorVelocity} m/s</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={5.0}
                  step={0.1}
                  value={conveyorVelocity}
                  onChange={(e) => setConveyorVelocity(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Optical Gate Sensitivity */}
              <div>
                <span className="font-mono text-xs text-white/70 block mb-2 uppercase">
                  Optical Barcode Gate:
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {(['standard', 'high-speed'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setOpticalGateSensitivity(mode)}
                      className={`py-2 px-3 rounded-lg border transition-colors ${
                        opticalGateSensitivity === mode
                          ? 'border-white bg-white/15 text-white font-medium'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {mode.toUpperCase()} SENSOR
                    </button>
                  ))}
                </div>
              </div>

              {/* Routing Chute */}
              <div>
                <span className="font-mono text-xs text-white/70 block mb-2 uppercase">
                  Logistics Routing Matrix:
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {(['dual-route', 'express'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setRoutingChute(mode)}
                      className={`py-2 px-3 rounded-lg border transition-colors ${
                        routingChute === mode
                          ? 'border-white bg-white/15 text-white font-medium'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {mode.toUpperCase()} CHUTE
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeStreamId === 'kinetic' && (
            <div className="space-y-6 border-t border-white/10 pt-6">
              {/* Particle Density */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-white/70">Particle Physics Nodes:</span>
                  <span className="text-amber-300 font-semibold">{particleDensity},000 Nodes</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={500}
                  step={25}
                  value={particleDensity}
                  onChange={(e) => setParticleDensity(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Color Temperature */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-white/70">Amber Color Temperature:</span>
                  <span className="text-amber-400 font-semibold">{kelvinTemp} K</span>
                </div>
                <input
                  type="range"
                  min={2400}
                  max={4800}
                  step={100}
                  value={kelvinTemp}
                  onChange={(e) => setKelvinTemp(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Gravitational Turbulence */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-white/70">Orbital Turbulence:</span>
                  <span className="text-cyan-300 font-semibold">{gravityTurbulence}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  step={5}
                  value={gravityTurbulence}
                  onChange={(e) => setGravityTurbulence(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Client Commission Architecture Note */}
          <div className="pt-6 border-t border-white/10 text-xs text-white/60 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture Scope:
            </strong>
            Integrated with WebGL 2.0 PBR anisotropic materials, hardware-accelerated video decoding loops, and live physical actuator telemetry.
          </div>
        </div>
      </div>

      {/* Interactive Spec Sheet Modal */}
      <AnimatePresence>
        {showSpecModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-2xl border border-white/20 bg-neutral-950 p-6 sm:p-8 space-y-6 shadow-2xl text-white font-clash"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#67e8f9] block">
                    ACHTREX ARCHITECTURE SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-normal mt-1">{activeStream.title}</h3>
                </div>
                <button
                  onClick={() => setShowSpecModal(false)}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/40 block">ASSET CODE:</span>
                  <span className="text-white font-medium">{activeStream.assetCode}</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/40 block">OUTPUT RESOLUTION:</span>
                  <span className="text-emerald-400 font-medium">{activeStream.resolution}</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/40 block">FRAME TARGET:</span>
                  <span className="text-cyan-400 font-medium">{activeStream.frameRate}</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/40 block">COMMISSION DOMAIN:</span>
                  <span className="text-white font-medium">{activeStream.category}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-white/70 border-t border-white/10 pt-4">
                <div>&bull; Codebase: Modular React 19 / Next.js 15 Server &amp; Client Components</div>
                <div>&bull; Rendering: WebGL 2.0 / WebGPU Pipeline with Hardware Video Sync</div>
                <div>&bull; Integration: Real-Time WebSockets &bull; REST API &bull; Headless Architecture</div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setShowSpecModal(false)}
                  className="px-5 py-2.5 rounded-full bg-white text-black font-clash text-xs font-medium hover:bg-neutral-200 transition-colors"
                >
                  Acknowledge &amp; Return to Console
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Backward-compatible alias for existing imports
const AutomotiveConfiguratorSimulator = SpatialConfiguratorEngine;

// =========================================================================
// 2. ARCHITECTURAL SPATIAL EXPERIENCE SIMULATOR
// =========================================================================
function ArchitecturalSpatialSimulator() {
  const [hour, setHour] = useState(17); // 17 = 5 PM Golden Hour
  const [finish, setFinish] = useState<'calacatta' | 'smoked-oak' | 'cast-concrete'>('calacatta');
  const [level, setLevel] = useState<'sky-penthouse' | 'atrium-pavilion' | 'cantilever-pool'>('sky-penthouse');

  const finishes = {
    calacatta: { name: 'Calacatta Michelangelo Marble', color: '#eae6df', texture: 'Polished Vein' },
    'smoked-oak': { name: 'Smoked Belgian Oak', color: '#3a3029', texture: 'Natural Grain' },
    'cast-concrete': { name: 'Brutalist Architectural Concrete', color: '#7c7c7c', texture: 'Formwork Matte' },
  };

  const getSunData = (h: number) => {
    if (h < 8) return { label: 'Dawn Twilight', temp: '2800K', lux: '1,200 lx', sky: 'from-amber-900/60 via-purple-950/40 to-black' };
    if (h < 15) return { label: 'Solar Zenith', temp: '5600K', lux: '85,000 lx', sky: 'from-sky-900/40 via-blue-950/30 to-black' };
    if (h < 19) return { label: 'Golden Hour', temp: '3200K', lux: '18,500 lx', sky: 'from-amber-600/40 via-orange-950/40 to-black' };
    return { label: 'Architectural Nocturne', temp: '2400K', lux: '420 lx', sky: 'from-indigo-950/50 via-slate-950 to-black' };
  };

  const sunData = getSunData(hour);

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            SOLAR &amp; SPATIAL TWIN
          </span>
          <span className="font-clash text-sm text-white/70">
            Real Estate Lighting Engine
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-white/70">
          <span>Azimuth: <strong className="text-white">{(hour * 15).toFixed(0)}°</strong></span>
          <span>Color Temp: <strong className="text-amber-400">{sunData.temp}</strong></span>
          <span>Illuminance: <strong className="text-emerald-400">{sunData.lux}</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Dynamic Architectural Viewport */}
        <div className={`lg:col-span-8 relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b ${sunData.sky} transition-all duration-700`}>
          {/* Spatial Blueprint Graphic */}
          <div className="relative w-full h-72 my-auto flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[16/9] rounded-2xl border border-white/20 p-6 flex flex-col justify-between backdrop-blur-md bg-black/40 shadow-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block">
                    Spatial Zone
                  </span>
                  <span className="font-clash text-lg text-white">
                    {level === 'sky-penthouse' ? 'Sky Penthouse Terrace (420 m²)' : level === 'atrium-pavilion' ? 'Master Glass Atrium (280 m²)' : 'Cantilevered Infinity Deck (190 m²)'}
                  </span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-amber-300">
                  {sunData.label}
                </span>
              </div>

              {/* Architectural Cross Section Line Graphic */}
              <div className="my-auto flex items-center justify-center">
                <div
                  className="w-full h-24 rounded-lg border border-white/15 p-4 flex items-center justify-between transition-colors duration-500"
                  style={{ backgroundColor: finishes[finish].color + '33' }}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-white/60 block">MATERIAL SPEC</span>
                    <span className="font-clash text-sm text-white font-medium">{finishes[finish].name}</span>
                    <span className="font-mono text-[10px] text-white/50 block">{finishes[finish].texture}</span>
                  </div>
                  <div className="text-right font-mono text-[11px] text-white/60">
                    <div>Passive Thermal: 94.2%</div>
                    <div>Acoustic Isolation: 42 dB</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-white/60 border-t border-white/10 pt-3">
                <span>Solar Vector: ({Math.cos(hour).toFixed(2)}, {Math.sin(hour).toFixed(2)}, 0.45)</span>
                <span className="text-emerald-400">Volumetric Fog: Enabled</span>
              </div>
            </div>
          </div>

          {/* Time of Day Sun Path Slider */}
          <div className="p-4 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-white/60">Time of Day (Sun Path Simulation):</span>
              <strong className="text-white">{hour.toString().padStart(2, '0')}:00 HRS ({sunData.label})</strong>
            </div>
            <input
              type="range"
              min={6}
              max={23}
              value={hour}
              onChange={(e) => setHour(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[10px] text-white/40">
              <span>06:00 Dawn</span>
              <span>12:00 Noon</span>
              <span>17:00 Sunset</span>
              <span>23:00 Night</span>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-6 font-clash">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              Vantage Point &amp; Floorplan
            </label>
            <div className="space-y-2">
              {[
                { id: 'sky-penthouse', label: 'Sky Penthouse Terrace' },
                { id: 'atrium-pavilion', label: 'Master Glass Atrium' },
                { id: 'cantilever-pool', label: 'Cantilevered Infinity Deck' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setLevel(lvl.id as any)}
                  className={`w-full p-3 rounded-lg border text-left font-mono text-xs transition-colors ${
                    level === lvl.id
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              Architectural Materials &amp; Finishes
            </label>
            <div className="space-y-2">
              {(Object.keys(finishes) as Array<keyof typeof finishes>).map((f) => (
                <button
                  key={f}
                  onClick={() => setFinish(f)}
                  className={`w-full p-3 rounded-lg border text-left flex items-center justify-between font-mono text-xs transition-colors ${
                    finish === f
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span>{finishes[f].name}</span>
                  <span
                    className="w-4 h-4 rounded-full border border-white/30"
                    style={{ backgroundColor: finishes[f].color }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture:
            </strong>
            Volumetric raymarching in GLSL, dynamic spherical harmonic skylight computation, and touch-optimized orbital camera systems.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 3. AUTONOMOUS AI COPILOT & KNOWLEDGE SURFACE SIMULATOR
// =========================================================================
function AutonomousAiCopilotSimulator() {
  const [query, setQuery] = useState('Analyze multi-region edge latency and synthesize failover policy');
  const [isExecuting, setIsExecuting] = useState(false);
  const [outputTokens, setOutputTokens] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const samplePrompts = [
    'Analyze multi-region edge latency and synthesize failover policy',
    'Synthesize clinical trial cohort with zero PHI leakage risk',
    'Orchestrate autonomous microservice container auto-scaling',
  ];

  const steps = [
    { title: 'Vector DB Semantic Retrieval', tool: 'qdrant_hybrid_search(k=8, thresh=0.88)', ms: '12ms' },
    { title: 'Multi-Agent Tool Orchestration', tool: 'agent_evaluator.verify_safety_guardrails()', ms: '18ms' },
    { title: 'LLM Reasoning & Output Synthesis', tool: 'vllm_cluster_generate(temp=0.2, top_p=0.95)', ms: '34ms' },
  ];

  const executePipeline = (text: string) => {
    setQuery(text);
    setIsExecuting(true);
    setOutputTokens([]);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 500);
    setTimeout(() => {
      setActiveStep(3);
      const streamText = `[OPTIMAL POLICY GENERATED]: Multi-region latency delta identified in eu-central-1 (82ms -> 18ms). Autonomous traffic diversion executed across Zurich & Stockholm edge nodes. Zero dropped sockets. Security token signature verified via deterministic Ed25519 hash. Memory cache hit rate: 99.8%.`;
      const words = streamText.split(' ');
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < words.length) {
          setOutputTokens((prev) => [...prev, words[idx]]);
          idx++;
        } else {
          clearInterval(interval);
          setIsExecuting(false);
        }
      }, 50);
    }, 1100);
  };

  useEffect(() => {
    executePipeline(query);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            AI AGENT RUNTIME V4
          </span>
          <span className="font-clash text-sm text-white/70">
            Streaming Autonomous Copilot Console
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs">
          <span>Throughput: <strong className="text-emerald-400">1,840 tok/sec</strong></span>
          <span>GPU VRAM: <strong className="text-cyan-400">18.4 / 24 GB</strong></span>
          <span>Hallucination Filter: <strong className="text-emerald-400">ACTIVE</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left Interactive Prompt & Telemetry */}
        <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 space-y-6 font-clash">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-2">
              Select or Input Agent Directive:
            </label>
            <div className="space-y-2">
              {samplePrompts.map((p) => (
                <button
                  key={p}
                  disabled={isExecuting}
                  onClick={() => executePipeline(p)}
                  className={`w-full p-3 rounded-lg border text-left font-mono text-xs transition-colors ${
                    query === p
                      ? 'border-white bg-white/15 text-white'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  &rarr; {p}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Tool Calling Pipeline */}
          <div className="pt-4 border-t border-white/10">
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              Deterministic Agent Trace:
            </label>
            <div className="space-y-2.5">
              {steps.map((st, i) => (
                <div
                  key={st.title}
                  className={`p-3 rounded-lg border font-mono text-xs transition-all ${
                    activeStep > i
                      ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                      : 'border-white/10 bg-white/5 text-white/40'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">{st.title}</span>
                    <span className="text-[10px] text-white/50">{st.ms}</span>
                  </div>
                  <div className="text-[10px] opacity-80 truncate">{st.tool}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Streaming Output Terminal */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-[#050608] flex flex-col justify-between font-mono">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs text-white/50">
              <span className="text-cyan-400">STREAMING INFERENCE TERMINAL</span>
              <span>STATE: {isExecuting ? 'SYNTHESIZING' : 'COMPLETE'}</span>
            </div>

            <div className="text-xs text-white/50">
              <span className="text-emerald-400 font-bold">&gt; user_input:</span> {query}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white/90 leading-relaxed min-h-[220px]">
              <span className="text-cyan-300 font-semibold block mb-2">&gt; telemetry_engine_output:</span>
              <p className="font-light">
                {outputTokens.join(' ')}
                {isExecuting && <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-white/40 pt-4 border-t border-white/10">
            <span>Deterministic Guardrail: 99.98% Confidence</span>
            <span>RAG Context Window: 128,000 Tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 4. KINETIC STORYTELLING & AUDIO-REACTIVE MEDIA SIMULATOR
// =========================================================================
function KineticStorytellingSimulator() {
  const [chapter, setChapter] = useState<'twilight' | 'refraction' | 'awakening'>('refraction');
  const [distortion, setDistortion] = useState(65);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const chapters = {
    twilight: { title: '01 &bull; Twilight Emergence', theme: 'from-purple-950 via-black to-black', text: 'THE SHADOW ARCHITECTURE' },
    refraction: { title: '02 &bull; Neon Refraction', theme: 'from-blue-950 via-slate-950 to-black', text: 'LIQUID CHROMATIC DESCENT' },
    awakening: { title: '03 &bull; Dawn Synthesis', theme: 'from-amber-950 via-neutral-950 to-black', text: 'ELECTRO-ACOUSTIC HORIZON' },
  };

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            GLSL AUDIO-REACTIVE CANVAS
          </span>
          <span className="font-clash text-sm text-white/70">
            Digital Campaign Storytelling Surface
          </span>
        </div>
        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors ${
            isPlayingAudio ? 'bg-emerald-400 text-black font-semibold' : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {isPlayingAudio ? 'Ambient Soundscape Active' : 'Start Audio Reactivity'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Kinetic Canvas Display */}
        <div className={`lg:col-span-8 relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b ${chapters[chapter].theme} transition-all duration-700`}>
          <div className="relative w-full h-72 my-auto flex items-center justify-center">
            {/* Kinetic Type Distortion Layer */}
            <motion.div
              animate={{
                scale: isPlayingAudio ? [1, 1.04, 1] : 1,
                filter: `blur(${(distortion / 40).toFixed(1)}px)`,
              }}
              transition={{ duration: 1.2, repeat: isPlayingAudio ? Infinity : 0, ease: 'easeInOut' }}
              className="text-center font-clash select-none"
            >
              <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 tracking-tighter leading-none block">
                {chapters[chapter].text}
              </span>
              <span className="font-mono text-xs text-white/60 tracking-widest uppercase mt-4 block">
                Chromatic Dispersion Factor: {(distortion / 100).toFixed(2)} &bull; 60fps WebGL Pipeline
              </span>
            </motion.div>
          </div>

          {/* Interactive Distortion Slider */}
          <div className="p-4 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-white/60">Fragment Shader Distortion Level:</span>
              <strong className="text-white">{distortion}%</strong>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={distortion}
              onChange={(e) => setDistortion(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Chapters & Controls */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-6 font-clash">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              Narrative Chapters:
            </label>
            <div className="space-y-2">
              {(Object.keys(chapters) as Array<keyof typeof chapters>).map((c) => (
                <button
                  key={c}
                  onClick={() => setChapter(c)}
                  className={`w-full p-3 rounded-lg border text-left font-mono text-xs transition-colors ${
                    chapter === c
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                  dangerouslySetInnerHTML={{ __html: chapters[c].title }}
                />
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture:
            </strong>
            Scroll-linked WebGL custom vertex shaders, Web Audio frequency analyzer nodes, and frame-independent kinetic typography rendering.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 5. TACTILE 3D PRODUCT CUSTOMIZER SIMULATOR
// =========================================================================
function ProductCustomizerSimulator() {
  const [material, setMaterial] = useState<'grade5-titanium' | 'carbon-twill' | 'anodized-gold'>('grade5-titanium');
  const [explodedPercent, setExplodedPercent] = useState(30);
  const [monogram, setMonogram] = useState('ACHTREX-001');

  const materials = {
    'grade5-titanium': { name: 'Grade 5 Satin Titanium', hex: '#8a8e99', weight: '340g', price: '$2,400' },
    'carbon-twill': { name: '3K Twill Carbon Composite', hex: '#212328', weight: '190g', price: '$3,800' },
    'anodized-gold': { name: 'Aerospace Electro-Gold', hex: '#c8a85c', weight: '380g', price: '$4,500' },
  };

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            PBR INDUSTRIAL CUSTOMIZER
          </span>
          <span className="font-clash text-sm text-white/70">
            Tactile Product Engineering Engine
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-white/70">
          <span>Component Mass: <strong className="text-white">{materials[material].weight}</strong></span>
          <span>BOM Cost: <strong className="text-emerald-400">{materials[material].price}</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Visual Hardware Exploded Simulation */}
        <div className="lg:col-span-8 relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
          <div className="relative w-full h-72 my-auto flex items-center justify-center">
            {/* Exploded Mechanical Nodes */}
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              {['Bearing Housing', 'Drive Core', 'Rotor Ring'].map((comp, i) => (
                <motion.div
                  key={comp}
                  animate={{
                    x: (i - 1) * (explodedPercent * 1.5),
                    scale: 1 - explodedPercent * 0.002,
                  }}
                  className="w-24 sm:w-32 h-36 rounded-2xl border border-white/20 p-3 flex flex-col justify-between shadow-2xl backdrop-blur-md"
                  style={{ backgroundColor: materials[material].hex + '44' }}
                >
                  <span className="font-mono text-[9px] text-white/50">PART 0{i + 1}</span>
                  <div className="text-center font-mono text-xs text-white font-medium">
                    {comp}
                  </div>
                  <span className="font-mono text-[8px] text-white/40 text-center truncate">
                    {monogram || 'NO-MONOGRAM'}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Exploded View Slider */}
          <div className="p-4 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-white/60">Exploded Assembly Separation:</span>
              <strong className="text-white">{explodedPercent}% Exploded</strong>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={explodedPercent}
              onChange={(e) => setExplodedPercent(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-6 font-clash">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              PBR Material Swatch:
            </label>
            <div className="space-y-2">
              {(Object.keys(materials) as Array<keyof typeof materials>).map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`w-full p-3 rounded-lg border text-left flex items-center justify-between font-mono text-xs transition-colors ${
                    material === m
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span>{materials[m].name}</span>
                  <span
                    className="w-4 h-4 rounded-full border border-white/30"
                    style={{ backgroundColor: materials[m].hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-2">
              Precision Laser Monogram:
            </label>
            <input
              type="text"
              maxLength={14}
              value={monogram}
              onChange={(e) => setMonogram(e.target.value.toUpperCase())}
              placeholder="YOUR-ID"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 font-mono text-xs text-white focus:outline-none focus:border-white"
            />
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture:
            </strong>
            Instantaneous glTF mesh morphing, displacement normal mapping, and bidirectional CAD export formats.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 6. CLINICAL PLATFORM & TRIAGE SIMULATOR
// =========================================================================
function ClinicalPlatformSimulator() {
  const [patientId, setPatientId] = useState('PX-8942');
  const [filter, setFilter] = useState<'vitals' | 'genomics' | 'imaging'>('vitals');
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className={`w-full rounded-2xl border border-white/15 overflow-hidden shadow-2xl transition-colors ${highContrast ? 'bg-black text-white' : 'bg-neutral-950 text-white'}`}>
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            CALM CLINICAL RUNTIME
          </span>
          <span className="font-clash text-sm text-white/70">
            Zero-Friction Medical Telemetry
          </span>
        </div>
        <button
          onClick={() => setHighContrast(!highContrast)}
          className="font-mono text-xs px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
        >
          {highContrast ? 'Theater Mode' : 'High-Contrast Surgical Mode'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Telemetry Display */}
        <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div>
              <span className="font-mono text-[10px] text-white/50 uppercase block">SUBJECT ID</span>
              <span className="font-mono text-lg text-white font-semibold">{patientId} &bull; ICU Cohort A</span>
            </div>
            <span className="font-mono text-xs text-emerald-400">
              STATUS: STABLE
            </span>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="font-mono text-[10px] text-white/50 block">HEART RATE</span>
              <span className="font-mono text-2xl text-emerald-400 font-bold">72 <span className="text-xs font-normal">BPM</span></span>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="font-mono text-[10px] text-white/50 block">OXYGEN SAT (SpO2)</span>
              <span className="font-mono text-2xl text-cyan-400 font-bold">98.4 <span className="text-xs font-normal">%</span></span>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="font-mono text-[10px] text-white/50 block">BLOOD PRESSURE</span>
              <span className="font-mono text-2xl text-white font-bold">118/76</span>
            </div>
          </div>

          {/* Animated Waveform Display */}
          <div className="p-4 rounded-xl border border-white/10 bg-black/80 space-y-2">
            <div className="flex justify-between items-center font-mono text-[11px] text-white/60">
              <span>REAL-TIME LEAD-II CARDIAC RHYTHM</span>
              <span className="text-emerald-400">NORMAL SINUS</span>
            </div>
            <div className="h-20 w-full overflow-hidden relative flex items-center">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-[200%] h-12 flex items-center shrink-0 border-b border-emerald-500/30"
              >
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 flex items-center justify-center">
                    <span className="font-mono text-emerald-400 text-xs font-black tracking-tighter">
                      /\_/\__/\__
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Clinical Sidebar */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-6 font-clash">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              Diagnostic Domain:
            </label>
            <div className="space-y-2">
              {(['vitals', 'genomics', 'imaging'] as const).map((dom) => (
                <button
                  key={dom}
                  onClick={() => setFilter(dom)}
                  className={`w-full p-3 rounded-lg border text-left font-mono text-xs uppercase transition-colors ${
                    filter === dom
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture:
            </strong>
            Strict WCAG 2.2 AAA accessibility compliance, encrypted client-side WebSockets, and sub-10ms state reconciliation.
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 7. CONNECTED HOSPITALITY DIGITAL JOURNEY SIMULATOR
// =========================================================================
function HospitalityJourneySimulator() {
  const [activePin, setActivePin] = useState<'overwater-villa' | 'stargazing-deck' | 'coral-dining'>('overwater-villa');
  const [time, setTime] = useState<'sunrise' | 'sunset' | 'midnight'>('sunset');

  const pins = {
    'overwater-villa': { name: 'Pavilion Villa 08', temp: '28°C', desc: 'Cantilevered glass floor with direct private lagoon reef access.' },
    'stargazing-deck': { name: 'Celestial Observatory', temp: '24°C', desc: 'Zero light-pollution telescope pavilion with somatic audio.' },
    'coral-dining': { name: 'Sub-Aquatic Dining', temp: '22°C', desc: 'Immersive underwater tasting menu 6 meters below high tide.' },
  };

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            FLAGSHIP RESORT MAP
          </span>
          <span className="font-clash text-sm text-white/70">
            Spatial Guest Journey &amp; Itinerary
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          {(['sunrise', 'sunset', 'midnight'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTime(t)}
              className={`px-3 py-1 rounded-md uppercase transition-colors ${
                time === t ? 'bg-white text-black font-semibold' : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Spatial Archipelago Viewport */}
        <div className="lg:col-span-8 relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-blue-950/40 via-cyan-950/20 to-black">
          <div className="relative w-full h-72 my-auto flex items-center justify-center">
            {/* Interactive Archipelago Spatial Pins */}
            <div className="relative w-full max-w-md aspect-video rounded-3xl border border-white/20 p-6 flex flex-col justify-between backdrop-blur-md bg-black/40">
              <div className="flex justify-between items-center text-xs font-mono text-white/60">
                <span>ISLAND RADAR: ATOL-9</span>
                <span className="text-emerald-400">TIDE: SLACK HIGH</span>
              </div>

              {/* Pins on the radar */}
              <div className="relative w-full h-32 flex items-center justify-around">
                {(Object.keys(pins) as Array<keyof typeof pins>).map((pinKey) => (
                  <button
                    key={pinKey}
                    onClick={() => setActivePin(pinKey)}
                    className={`relative p-3 rounded-full border transition-all ${
                      activePin === pinKey
                        ? 'border-white bg-white text-black scale-110 shadow-lg'
                        : 'border-white/30 bg-black/80 text-white hover:scale-105'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-current block" />
                  </button>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs font-mono">
                <span className="text-white font-medium">{pins[activePin].name}</span>
                <span className="text-white/60">{pins[activePin].temp}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md">
            <p className="font-clash text-sm text-white/90 font-light">
              &ldquo;{pins[activePin].desc}&rdquo;
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-6 font-clash">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              Sensory Destination Nodes:
            </label>
            <div className="space-y-2">
              {(Object.keys(pins) as Array<keyof typeof pins>).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePin(p)}
                  className={`w-full p-3 rounded-lg border text-left font-mono text-xs transition-colors ${
                    activePin === p
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {pins[p].name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture:
            </strong>
            Cinematographic WebGL video streaming, personalized guest room syncing, and progressive itinerary scheduling.
          </div>
        </div>
      </div>
    </div>
  );
}
