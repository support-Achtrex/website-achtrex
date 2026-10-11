'use client';

import { useState, useEffect } from 'react';
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
          {slug === 'automotive-spatial-configurator' && <AutomotiveConfiguratorSimulator />}
          {slug === 'architectural-spatial-experience' && <ArchitecturalSpatialSimulator />}
          {slug === 'intelligent-copilot-interface' && <AutonomousAiCopilotSimulator />}
          {slug === 'interactive-storytelling-campaign' && <KineticStorytellingSimulator />}
          {slug === 'realtime-product-customizer' && <ProductCustomizerSimulator />}
          {slug === 'intelligent-clinical-platform' && <ClinicalPlatformSimulator />}
          {slug === 'connected-hospitality-platform' && <HospitalityJourneySimulator />}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 1. AUTOMOTIVE SPATIAL CONFIGURATOR SIMULATOR
// =========================================================================
function AutomotiveConfiguratorSimulator() {
  const [paintColor, setPaintColor] = useState<'liquid-obsidian' | 'rosso-corsa' | 'titanium-satin' | 'deep-azure'>('liquid-obsidian');
  const [finish, setFinish] = useState<'gloss' | 'satin-matte' | 'forged-carbon'>('gloss');
  const [wheelType, setWheelType] = useState<'aero-monoblock' | 'multi-spoke-carbon' | 'forged-gold'>('multi-spoke-carbon');
  const [activeAero, setActiveAero] = useState(true);
  const [viewMode, setViewMode] = useState<'exterior' | 'exploded' | 'aerodynamics'>('exterior');

  const colorPalettes = [
    { id: 'liquid-obsidian', name: 'Liquid Obsidian', hex: '#111317', highlight: '#3a4454', price: 0 },
    { id: 'rosso-corsa', name: 'Formula Rosso', hex: '#991119', highlight: '#f8434b', price: 14500 },
    { id: 'titanium-satin', name: 'Grigio Titanium', hex: '#63666f', highlight: '#b0b5c1', price: 9200 },
    { id: 'deep-azure', name: 'Midnight Azure', hex: '#15243b', highlight: '#2a609d', price: 12800 },
  ];

  const selectedColorObj = colorPalettes.find((c) => c.id === paintColor)!;
  const basePrice = 285000;
  const finishPrice = finish === 'forged-carbon' ? 18000 : finish === 'satin-matte' ? 6500 : 0;
  const wheelPrice = wheelType === 'multi-spoke-carbon' ? 12000 : wheelType === 'forged-gold' ? 8500 : 4000;
  const totalPrice = basePrice + selectedColorObj.price + finishPrice + wheelPrice;

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl">
      {/* Top Configurator Header Bar */}
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            ACHTREX-V4 AERO GT
          </span>
          <span className="font-clash text-sm text-white/70 hidden sm:inline">
            Spatial Configurator Engine
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <span className="block font-mono text-[10px] text-white/50 uppercase tracking-widest">
              Configured Valuation
            </span>
            <span className="font-mono text-base sm:text-lg text-emerald-400 font-semibold">
              ${totalPrice.toLocaleString()} USD
            </span>
          </div>
          <button className="px-4 py-2 rounded-full bg-white text-black font-clash text-xs font-medium hover:bg-neutral-200 transition-colors">
            Generate Spec Sheet &rarr;
          </button>
        </div>
      </div>

      {/* Main Viewport + Live Interactive Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
        {/* Visual Simulated Canvas Zone */}
        <div className="lg:col-span-8 relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
          {/* Animated Ambient Car Representation with Color Reflectivity */}
          <div className="relative w-full h-80 my-auto flex items-center justify-center">
            {/* Ambient Shadow Plane */}
            <div className="absolute bottom-4 w-3/4 h-12 bg-black/80 blur-2xl rounded-full" />

            {/* Simulated 3D Hypercar Silhouette */}
            <motion.div
              animate={{
                scale: viewMode === 'exploded' ? 1.08 : 1,
                rotateY: viewMode === 'aerodynamics' ? 5 : 0,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full max-w-lg aspect-[16/9] rounded-3xl p-8 flex flex-col justify-between shadow-2xl border border-white/10 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${selectedColorObj.hex} 0%, #060709 100%)`,
                boxShadow: `0 20px 80px -20px ${selectedColorObj.highlight}40`,
              }}
            >
              {/* Dynamic Glare & Finish Overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-700"
                style={{
                  background:
                    finish === 'forged-carbon'
                      ? 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 6px)'
                      : finish === 'satin-matte'
                      ? 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)'
                      : 'radial-gradient(circle at 25% 15%, rgba(255,255,255,0.6) 0%, transparent 50%), linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 60%)',
                }}
              />

              {/* Wireframe Aerodynamic Streamlines */}
              {viewMode === 'aerodynamics' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: 'linear',
                      }}
                      className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      style={{ top: `${20 + i * 14}%` }}
                    />
                  ))}
                </div>
              )}

              {/* Vehicle Body Visual Representation */}
              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block">
                    Surface Finish
                  </span>
                  <span className="font-clash text-lg text-white font-medium">
                    {selectedColorObj.name}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/60 border border-white/20 font-mono text-[11px] text-white/90">
                  {finish.toUpperCase().replace('-', ' ')}
                </div>
              </div>

              {/* Center Body Visual Detail */}
              <div className="my-auto z-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-44 h-16 mx-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-mono text-xs tracking-widest text-white/70">
                      {wheelType.toUpperCase().replace('-', ' ')}
                    </span>
                  </div>
                  {viewMode === 'exploded' && (
                    <span className="font-mono text-[11px] text-cyan-300 block mt-2 animate-pulse">
                      &bull; Exploded Mechanical Component Layer Active
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Telemetry inside Car View */}
              <div className="flex justify-between items-end z-10 border-t border-white/10 pt-4">
                <div className="flex gap-6 font-mono text-xs text-white/80">
                  <div>
                    <span className="text-[10px] text-white/40 block">0-100 KM/H</span>
                    <span>2.12s</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block">DOWNFORCE</span>
                    <span>480 KG</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block">DRAG (Cd)</span>
                    <span>0.238</span>
                  </div>
                </div>
                <div className="font-mono text-[11px] text-emerald-400">
                  AERO WING: {activeAero ? 'DEPLOYED' : 'STOWED'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom View Mode Controls */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-white/50 mr-2">Camera Mode:</span>
              {(['exterior', 'exploded', 'aerodynamics'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  className={`px-3 py-1 rounded-md font-mono text-xs transition-colors ${
                    viewMode === m
                      ? 'bg-white text-black font-medium'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {m.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setActiveAero(!activeAero)}
              className="font-mono text-xs px-3 py-1 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Toggle Active Wing
            </button>
          </div>
        </div>

        {/* Right Configuration Palette Column */}
        <div className="lg:col-span-4 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 space-y-8 font-clash">
          {/* Paint Palette */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="font-mono text-xs uppercase tracking-wider text-white/60">
                01 &bull; Exterior Colorway
              </label>
              <span className="font-mono text-xs text-emerald-400">
                +${selectedColorObj.price.toLocaleString()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {colorPalettes.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setPaintColor(c.id as any)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    paintColor === c.id
                      ? 'border-white bg-white/10 ring-1 ring-white'
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full border border-white/30 shadow-sm shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="truncate">
                    <span className="block text-xs font-medium text-white truncate">
                      {c.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Surface Finish Treatment */}
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              02 &bull; Clearcoat &amp; Finish
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'gloss', label: 'Gloss' },
                { id: 'satin-matte', label: 'Satin Matte' },
                { id: 'forged-carbon', label: 'Forged Carbon' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFinish(f.id as any)}
                  className={`py-2.5 px-2 rounded-lg border text-center font-mono text-xs transition-colors ${
                    finish === f.id
                      ? 'border-white bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Wheel & Caliper Assembly */}
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-white/60 block mb-3">
              03 &bull; Wheel Configuration
            </label>
            <div className="space-y-2">
              {[
                { id: 'aero-monoblock', label: '21" Aero Monoblock Disc', price: '+$4,000' },
                { id: 'multi-spoke-carbon', label: '21" Multi-Spoke Carbon Weave', price: '+$12,000' },
                { id: 'forged-gold', label: '20/21" Forged Satin Aurum', price: '+$8,500' },
              ].map((w) => (
                <button
                  key={w.id}
                  onClick={() => setWheelType(w.id as any)}
                  className={`w-full p-3 rounded-lg border flex justify-between items-center text-xs font-mono transition-all ${
                    wheelType === w.id
                      ? 'border-white bg-white/10 text-white'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span>{w.label}</span>
                  <span className="text-emerald-400">{w.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Client Commission Architecture Note */}
          <div className="pt-4 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
            <strong className="text-white block font-mono uppercase text-[11px] mb-1">
              Production Architecture:
            </strong>
            Streaming Draco GLTF assets with progressive LOD, WebGL 2.0 PBR anisotropic materials, and bidirectional ERP pricing integration.
          </div>
        </div>
      </div>
    </div>
  );
}

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
