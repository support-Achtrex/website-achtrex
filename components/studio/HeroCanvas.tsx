'use client';

import { useEffect, useRef } from 'react';

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let isVisible = true;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track mouse with damping
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause when tab not visible
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Complex geometric wave knots / kinetic ribbon particles
    const ribbons = [
      { radius: 260, speed: 0.0006, color: 'rgba(0, 169, 206, 0.45)', secondaryColor: 'rgba(243, 112, 33, 0.35)', points: 140, layers: 3 },
      { radius: 340, speed: 0.0004, color: 'rgba(2, 99, 198, 0.35)', secondaryColor: 'rgba(12, 189, 175, 0.35)', points: 180, layers: 2 },
      { radius: 180, speed: 0.0009, color: 'rgba(243, 112, 33, 0.40)', secondaryColor: 'rgba(255, 255, 255, 0.25)', points: 90, layers: 2 },
    ];

    // Background floating spatial nodes
    const nodeCount = 55;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      time += 1;

      // Soft trail clearing
      ctx.fillStyle = 'rgba(7, 10, 15, 0.28)';
      ctx.fillRect(0, 0, width, height);

      const centerX = width * 0.5 + (mouseX - width * 0.5) * 0.08;
      const centerY = height * 0.48 + (mouseY - height * 0.5) * 0.08;

      // Draw background constellation mesh
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0) n1.x = width;
        if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height;
        if (n1.y > height) n1.y = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${n1.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(0, 169, 206, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Center luminous core glow
      const radialGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        40,
        centerX,
        centerY,
        Math.min(width, height) * 0.55
      );
      radialGradient.addColorStop(0, 'rgba(0, 169, 206, 0.14)');
      radialGradient.addColorStop(0.35, 'rgba(243, 112, 33, 0.08)');
      radialGradient.addColorStop(0.7, 'rgba(2, 99, 198, 0.03)');
      radialGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = radialGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.55, 0, Math.PI * 2);
      ctx.fill();

      // Render 3D dynamic kinetic ribbon waves
      ribbons.forEach((ribbon, rIdx) => {
        for (let l = 0; l < ribbon.layers; l++) {
          ctx.beginPath();
          const layerOffset = l * 18;
          const currentRadius = ribbon.radius + layerOffset + Math.sin(time * 0.01 + rIdx) * 12;

          for (let p = 0; p <= ribbon.points; p++) {
            const angle = (p / ribbon.points) * Math.PI * 2;
            
            // Harmonic 3D wave deformation
            const wave1 = Math.sin(angle * 4 + time * ribbon.speed * 20 + l) * 28;
            const wave2 = Math.cos(angle * 7 - time * ribbon.speed * 15) * 18;
            const wave3 = Math.sin(angle * 2 + (mouseX / width) * 2) * 22;

            const r = currentRadius + wave1 + wave2 + wave3;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * (r * 0.65); // Perspective tilt

            if (p === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();

          ctx.lineWidth = l === 0 ? 1.5 : 0.8;
          ctx.strokeStyle = l % 2 === 0 ? ribbon.color : ribbon.secondaryColor;
          ctx.stroke();
        }
      });

      // Subtle atmospheric grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 140;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
      {/* Editorial subtle film-grain & vignette blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-[#070A0F]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,15,0.7)_100%)] pointer-events-none" />
    </div>
  );
}
