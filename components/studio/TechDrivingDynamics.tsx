'use client';

import { useEffect, useRef } from 'react';

interface TechDrivingDynamicsProps {
  className?: string;
  variant?: 'hero' | 'minimal' | 'full';
  showTelemetry?: boolean;
}

export function TechDrivingDynamics({
  className = '',
  variant = 'hero',
}: TechDrivingDynamicsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animation & Physics Refs
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const speedRef = useRef(130);
  const targetSpeedRef = useRef(130);
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
      targetSpeedRef.current = Math.min(260, targetSpeedRef.current + delta * 0.12);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        targetSpeedRef.current = 130;
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
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.08;

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
        const alpha = Math.min(1, Math.max(0, (1000 - s.z) / 750)) * 0.55;

        if (px >= -50 && px <= width + 50 && py >= -50 && py <= height + 50) {
          ctx.beginPath();
          ctx.moveTo(prevPx, prevPy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `${s.color}${alpha.toFixed(3)})`;
          ctx.lineWidth = Math.max(0.7, (1 - s.z / 1000) * s.width * 1.4);
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      // Subtle dynamic road grid lines / ground perspective
      const gridAlpha = 0.08;
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
  }, [variant]);

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
    </div>
  );
}
