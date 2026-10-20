'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface TechDrivingDynamicsProps {
  className?: string;
  variant?: 'hero' | 'minimal' | 'full';
  showTelemetry?: boolean;
}

export function TechDrivingDynamics({
  className = '',
  variant = 'hero',
  showTelemetry = true,
}: TechDrivingDynamicsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Telemetry HUD state
  const [speed, setSpeed] = useState(128);
  const [steerAngle, setSteerAngle] = useState(0);
  const [gForce, setGForce] = useState(0.18);
  const [driveMode, setDriveMode] = useState<'CRUISE' | 'SPORT' | 'PLAID'>('SPORT');
  const [isBoosting, setIsBoosting] = useState(false);

  // Animation & Physics Refs
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const speedRef = useRef(128);
  const targetSpeedRef = useRef(128);
  const boostRef = useRef(1.0);
  const animFrameRef = useRef<number | null>(null);

  // Streak Particle definition
  interface Streak {
    x: number;
    y: number;
    z: number;
    prevZ: number;
    color: string;
    width: number;
    speedMul: number;
  }

  const streaksRef = useRef<Streak[]>([]);

  // Toggle drive modes
  const cycleDriveMode = useCallback(() => {
    setDriveMode((prev) => {
      if (prev === 'CRUISE') {
        targetSpeedRef.current = 140;
        return 'SPORT';
      }
      if (prev === 'SPORT') {
        targetSpeedRef.current = 248;
        return 'PLAID';
      }
      targetSpeedRef.current = 90;
      return 'CRUISE';
    });
  }, []);

  const triggerBoost = useCallback(() => {
    setIsBoosting(true);
    boostRef.current = 2.4;
    targetSpeedRef.current = 320;
    setTimeout(() => {
      setIsBoosting(false);
      boostRef.current = 1.0;
      targetSpeedRef.current = driveMode === 'PLAID' ? 248 : driveMode === 'SPORT' ? 140 : 90;
    }, 1200);
  }, [driveMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initStreaks();
    };

    window.addEventListener('resize', handleResize);

    // Optical streak palette: Pure Ice White, Cyan Pulse, Roadster Warm Amber
    const streakPalette = [
      'rgba(255, 255, 255, ',
      'rgba(0, 169, 206, ',
      'rgba(243, 112, 33, ',
      'rgba(180, 220, 255, ',
    ];

    const STREAK_COUNT = variant === 'minimal' ? 40 : 85;

    const initStreaks = () => {
      const streaks: Streak[] = [];
      for (let i = 0; i < STREAK_COUNT; i++) {
        const z = Math.random() * 1000 + 50;
        streaks.push({
          x: (Math.random() - 0.5) * width * 2.2,
          y: (Math.random() * 0.7 + 0.15) * height, // biased toward lower horizon / road plane
          z,
          prevZ: z,
          color: streakPalette[Math.floor(Math.random() * streakPalette.length)],
          width: Math.random() * 1.8 + 0.6,
          speedMul: Math.random() * 0.5 + 0.8,
        });
      }
      streaksRef.current = streaks;
    };

    initStreaks();

    // Mouse steering tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to +1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll throttle response
    let scrollTimeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY);
      targetSpeedRef.current = Math.min(320, targetSpeedRef.current + delta * 0.15);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        targetSpeedRef.current = driveMode === 'PLAID' ? 248 : driveMode === 'SPORT' ? 140 : 90;
      }, 400);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    // Main render loop
    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth mouse steering lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Smooth speed interpolation
      speedRef.current += (targetSpeedRef.current * boostRef.current - speedRef.current) * 0.08;

      // Update telemetry display at throttled intervals
      if (Math.random() < 0.15) {
        const jitter = (Math.random() - 0.5) * 2;
        const currentSpd = Math.round(speedRef.current + jitter);
        setSpeed(currentSpd);

        const angle = Number((mouseRef.current.x * 6.5).toFixed(1));
        setSteerAngle(angle);

        const latG = Number((Math.abs(mouseRef.current.x) * 0.85 + (speedRef.current > 180 ? 0.35 : 0.08)).toFixed(2));
        setGForce(latG);
      }

      ctx.clearRect(0, 0, width, height);

      // Horizon & perspective origin
      // Steers vanishing point opposite to mouse movement (like turning into a corner)
      const horizonX = width * 0.5 - mouseRef.current.x * 90;
      const horizonY = height * 0.55 - mouseRef.current.y * 40;

      const baseVel = (speedRef.current / 120) * 850 * dt;

      const streaks = streaksRef.current;
      for (let i = 0; i < streaks.length; i++) {
        const s = streaks[i];
        s.prevZ = s.z;
        s.z -= baseVel * s.speedMul;

        // Reset particle when it rushes past the camera
        if (s.z <= 10) {
          s.z = 1000;
          s.prevZ = 1000;
          s.x = (Math.random() - 0.5) * width * 2.2;
          s.y = (Math.random() * 0.7 + 0.15) * height;
        }

        // Project 3D to 2D
        const k = 400 / s.z;
        const px = s.x * k + horizonX;
        const py = (s.y - horizonY) * k + horizonY;

        const prevK = 400 / s.prevZ;
        const prevPx = s.x * prevK + horizonX;
        const prevPy = (s.y - horizonY) * prevK + horizonY;

        // Depth alpha falloff
        const alpha = Math.min(1, Math.max(0, (1000 - s.z) / 750)) * (isBoosting ? 0.9 : 0.5);

        if (px >= -50 && px <= width + 50 && py >= -50 && py <= height + 50) {
          ctx.beginPath();
          ctx.moveTo(prevPx, prevPy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `${s.color}${alpha.toFixed(3)})`;
          ctx.lineWidth = Math.max(0.7, (1 - s.z / 1000) * s.width * (isBoosting ? 2.2 : 1.4));
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      // Subtle dynamic road grid lines / ground perspective
      const gridAlpha = isBoosting ? 0.18 : 0.08;
      ctx.strokeStyle = `rgba(0, 169, 206, ${gridAlpha})`;
      ctx.lineWidth = 1;

      // Horizon line
      ctx.beginPath();
      ctx.moveTo(0, horizonY + 2);
      ctx.lineTo(width, horizonY + 2);
      ctx.stroke();

      // Highway perspective guide rails
      for (let lane = -3; lane <= 3; lane++) {
        if (lane === 0) continue;
        const groundX = width * 0.5 + lane * (width * 0.28) - mouseRef.current.x * 120;
        ctx.beginPath();
        ctx.moveTo(horizonX, horizonY);
        ctx.lineTo(groundX, height);
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [variant, isBoosting, driveMode]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      {/* Velocity Streaks Canvas with subtle screen blend */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover mix-blend-screen opacity-70 transition-opacity duration-700"
      />

      {/* Aerodynamic wind-tunnel side streamlines (Subtle accent) */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />

      {/* Minimalist Automotive Cockpit Telemetry HUD Widget */}
      {showTelemetry && (
        <div className="absolute right-6 sm:right-12 bottom-24 sm:bottom-12 z-30 pointer-events-auto">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-full shadow-2xl text-white font-mono text-[11px] tracking-wider transition-all hover:border-white/40">
            {/* Live Status LED */}
            <div className="flex items-center gap-1.5 pr-2 border-r border-white/15">
              <span className={`w-2 h-2 rounded-full ${isBoosting ? 'bg-[#F37021] animate-ping' : 'bg-[#00A9CE] animate-pulse'}`} />
              <span className="text-[10px] uppercase text-white/70 tracking-widest hidden sm:inline">
                AERO TECH
              </span>
            </div>

            {/* Velocity Output */}
            <div className="flex items-baseline gap-1">
              <span className="font-clash text-base sm:text-lg font-medium text-white tracking-tight tabular-nums">
                {speed}
              </span>
              <span className="text-[9px] text-white/50 uppercase">KM/H</span>
            </div>

            {/* G-Force / Lateral Dynamics */}
            <div className="hidden md:flex items-baseline gap-1 pl-2 border-l border-white/15 text-white/70">
              <span className="text-[10px] text-white/40">LAT-G</span>
              <span className="font-clash text-xs tabular-nums text-white/90">{gForce}G</span>
            </div>

            {/* Steer Yaw */}
            <div className="hidden lg:flex items-baseline gap-1 pl-2 border-l border-white/15 text-white/70">
              <span className="text-[10px] text-white/40">YAW</span>
              <span className="tabular-nums text-white/90">
                {steerAngle > 0 ? `+${steerAngle}°` : `${steerAngle}°`}
              </span>
            </div>

            {/* Drive Mode Selector Pill */}
            <button
              onClick={cycleDriveMode}
              title="Click to cycle Drive Dynamics Mode"
              className="ml-1 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/10"
            >
              {driveMode}
            </button>

            {/* Boost Acceleration Trigger */}
            <button
              onClick={triggerBoost}
              disabled={isBoosting}
              title="Engage Throttle Boost"
              className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer ${
                isBoosting
                  ? 'bg-[#F37021] text-white shadow-[0_0_15px_rgba(243,112,33,0.8)] scale-105'
                  : 'bg-white text-black hover:bg-white/90 hover:scale-105'
              }`}
            >
              {isBoosting ? 'BURST' : 'BOOST'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
