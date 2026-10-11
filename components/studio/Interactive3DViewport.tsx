'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export type ThreeDSceneMode =
  | 'experience-design'
  | 'creative-strategy'
  | 'digital-products'
  | 'ai-intelligent-experiences'
  | 'cgi-immersive'
  | 'product-configurators'
  | 'general';

interface Interactive3DViewportProps {
  mode: ThreeDSceneMode;
  className?: string;
  autoRotate?: boolean;
}

export function Interactive3DViewport({
  mode,
  className = '',
  autoRotate = true,
}: Interactive3DViewportProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Active material preset for configurator mode
  const [activePreset, setActivePreset] = useState<'titanium' | 'obsidian' | 'chrome' | 'gold'>('titanium');
  const configurableMeshesRef = useRef<THREE.Mesh[]>([]);

  // Mouse & interaction state
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationOffsetRef = useRef({ x: 0, y: 0 });

  // Material update function for configurator
  const applyMaterialPreset = useCallback((preset: 'titanium' | 'obsidian' | 'chrome' | 'gold') => {
    setActivePreset(preset);
    if (!configurableMeshesRef.current.length) return;

    let color = 0x889fa8;
    let metalness = 0.9;
    let roughness = 0.2;
    let clearcoat = 0.5;

    switch (preset) {
      case 'titanium':
        color = 0x7c8c9e;
        metalness = 0.95;
        roughness = 0.25;
        clearcoat = 0.6;
        break;
      case 'obsidian':
        color = 0x11161d;
        metalness = 0.4;
        roughness = 0.08;
        clearcoat = 1.0;
        break;
      case 'chrome':
        color = 0xe0e6ed;
        metalness = 1.0;
        roughness = 0.05;
        clearcoat = 0.9;
        break;
      case 'gold':
        color = 0xd4af37;
        metalness = 0.9;
        roughness = 0.18;
        clearcoat = 0.7;
        break;
    }

    configurableMeshesRef.current.forEach((mesh) => {
      if (mesh.material instanceof THREE.MeshPhysicalMaterial) {
        mesh.material.color.setHex(color);
        mesh.material.metalness = metalness;
        mesh.material.roughness = roughness;
        mesh.material.clearcoat = clearcoat;
        mesh.material.needsUpdate = true;
      }
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support safely
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);
    cameraRef.current = camera;

    // WebGL Renderer - optimized pixel ratio (max 1.5) for high performance
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting Environment
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x00a9ce, 1.8);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    const warmLight = new THREE.PointLight(0xffaa55, 1.5, 15);
    warmLight.position.set(2, -3, 3);
    scene.add(warmLight);

    // Root pivot for the object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    configurableMeshesRef.current = [];

    // =========================================================================
    // SCENE MODES: Bespoke Procedural 3D Geometry
    // =========================================================================

    if (mode === 'experience-design') {
      // Fluid, tactile morphing glass torus knot with iridescent accents
      const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32, 2, 3);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x0f1b26,
        metalness: 0.25,
        roughness: 0.1,
        transmission: 0.65,
        thickness: 1.2,
        ior: 1.52,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });
      const knot = new THREE.Mesh(geometry, material);
      mainGroup.add(knot);

      // Outer delicate orbital ring
      const ringGeo = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x00a9ce,
        emissive: 0x004455,
        metalness: 0.9,
        roughness: 0.2,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      mainGroup.add(ring);
    } else if (mode === 'creative-strategy') {
      // Monolithic architectural obsidian crystal prism with orbiting shards
      const prismGeo = new THREE.ConeGeometry(1.3, 2.4, 4);
      const prismMat = new THREE.MeshPhysicalMaterial({
        color: 0x0a0f14,
        metalness: 0.85,
        roughness: 0.12,
        clearcoat: 1.0,
      });
      const prism = new THREE.Mesh(prismGeo, prismMat);
      mainGroup.add(prism);

      // Satellite geometric crystal rings
      for (let i = 0; i < 3; i++) {
        const ringGeo = new THREE.TorusGeometry(1.8 + i * 0.35, 0.012, 16, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0xffaa55 : 0x00a9ce,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        });
        const rMesh = new THREE.Mesh(ringGeo, ringMat);
        rMesh.rotation.x = (i * Math.PI) / 4;
        rMesh.rotation.y = (i * Math.PI) / 6;
        mainGroup.add(rMesh);
      }
    } else if (mode === 'digital-products') {
      // Precision modular computational core with layered chassis
      const baseGeo = new THREE.BoxGeometry(2.2, 1.4, 0.35);
      const baseMat = new THREE.MeshPhysicalMaterial({
        color: 0x181e26,
        metalness: 0.9,
        roughness: 0.22,
        clearcoat: 0.8,
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      mainGroup.add(baseMesh);

      // Floating upper sapphire lens slab
      const lensGeo = new THREE.BoxGeometry(1.9, 1.1, 0.08);
      const lensMat = new THREE.MeshPhysicalMaterial({
        color: 0x00a9ce,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.85,
        thickness: 0.5,
        ior: 1.5,
      });
      const lensMesh = new THREE.Mesh(lensGeo, lensMat);
      lensMesh.position.z = 0.26;
      mainGroup.add(lensMesh);

      // Subtle micro-rings & telemetry ports
      for (let i = -2; i <= 2; i++) {
        const pGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.04, 16);
        const pMat = new THREE.MeshStandardMaterial({
          color: 0x00a9ce,
          emissive: 0x002233,
          metalness: 0.8,
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.position.set(i * 0.35, -0.75, 0);
        mainGroup.add(pMesh);
      }
    } else if (mode === 'ai-intelligent-experiences') {
      // Neural quantum core: concentric dual wireframe icosahedrons with luminous inner core
      const innerGeo = new THREE.IcosahedronGeometry(0.85, 2);
      const innerMat = new THREE.MeshPhysicalMaterial({
        color: 0x00a9ce,
        emissive: 0x003344,
        metalness: 0.3,
        roughness: 0.15,
        transmission: 0.75,
        thickness: 0.9,
      });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      mainGroup.add(inner);

      const outerGeo = new THREE.IcosahedronGeometry(1.65, 1);
      const outerMat = new THREE.MeshStandardMaterial({
        color: 0xffaa55,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      });
      const outer = new THREE.Mesh(outerGeo, outerMat);
      mainGroup.add(outer);

      // Particle constellation cloud around the neural core
      const particleCount = 70;
      const partGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 2.0 + Math.random() * 0.8;
        posArray[i] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = r * Math.cos(phi);
      }
      partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const partMat = new THREE.PointsMaterial({
        size: 0.035,
        color: 0x00a9ce,
        transparent: true,
        opacity: 0.85,
      });
      const points = new THREE.Points(partGeo, partMat);
      mainGroup.add(points);
    } else if (mode === 'cgi-immersive') {
      // Liquid chromium and faceted quartz crystal sculpture
      const crystalGeo = new THREE.OctahedronGeometry(1.35, 1);
      const crystalMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.85,
        thickness: 1.1,
        ior: 1.6,
        clearcoat: 1.0,
      });
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      mainGroup.add(crystal);

      // Surrounding ribbon waves
      const ribbonGeo = new THREE.TorusGeometry(1.7, 0.12, 16, 80);
      const ribbonMat = new THREE.MeshPhysicalMaterial({
        color: 0xd0d8e2,
        metalness: 0.98,
        roughness: 0.08,
        clearcoat: 1.0,
      });
      const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
      ribbon.rotation.x = Math.PI / 4;
      ribbon.rotation.y = Math.PI / 3;
      mainGroup.add(ribbon);
    } else if (mode === 'product-configurators') {
      // Configurable multi-component luxury mechanical assembly
      const bezelGeo = new THREE.TorusGeometry(1.3, 0.22, 24, 64);
      const bezelMat = new THREE.MeshPhysicalMaterial({
        color: 0x7c8c9e,
        metalness: 0.95,
        roughness: 0.25,
        clearcoat: 0.6,
      });
      const bezel = new THREE.Mesh(bezelGeo, bezelMat);
      mainGroup.add(bezel);
      configurableMeshesRef.current.push(bezel);

      // Internal gear wheel
      const gearGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.12, 18);
      const gearMat = new THREE.MeshPhysicalMaterial({
        color: 0x334155,
        metalness: 0.9,
        roughness: 0.3,
      });
      const gear = new THREE.Mesh(gearGeo, gearMat);
      gear.rotation.x = Math.PI / 2;
      mainGroup.add(gear);
      configurableMeshesRef.current.push(gear);

      // Central sapphire lens
      const dialGeo = new THREE.CylinderGeometry(1.05, 1.05, 0.02, 32);
      const dialMat = new THREE.MeshPhysicalMaterial({
        color: 0x0f172a,
        metalness: 0.3,
        roughness: 0.1,
        transmission: 0.7,
        thickness: 0.4,
      });
      const dial = new THREE.Mesh(dialGeo, dialMat);
      dial.rotation.x = Math.PI / 2;
      dial.position.z = 0.08;
      mainGroup.add(dial);
    } else {
      // Default abstract technical sphere sculpture
      const geo = new THREE.SphereGeometry(1.4, 32, 32);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x1e293b,
        metalness: 0.85,
        roughness: 0.2,
        clearcoat: 0.8,
      });
      const sphere = new THREE.Mesh(geo, mat);
      mainGroup.add(sphere);
    }

    // =========================================================================
    // Event Listeners: Mouse orbit, drag, and resize
    // =========================================================================

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      // Normalize mouse to [-1, 1] relative to container
      mouseRef.current.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDraggingRef.current) {
        const dx = e.clientX - dragStartRef.current.x;
        const dy = e.clientY - dragStartRef.current.y;
        rotationOffsetRef.current.y += dx * 0.008;
        rotationOffsetRef.current.x += dy * 0.008;
        dragStartRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // Intersection Observer: Pause WebGL rendering when off-screen
    // =========================================================================

    let isVisible = true;
    let clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Base auto rotation + user drag offset + subtle cursor tilt
      if (autoRotate) {
        mainGroup.rotation.y = elapsedTime * 0.35 + rotationOffsetRef.current.y + mouseRef.current.x * 0.35;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.15 + rotationOffsetRef.current.x - mouseRef.current.y * 0.35;
      } else {
        mainGroup.rotation.y = rotationOffsetRef.current.y + mouseRef.current.x * 0.45;
        mainGroup.rotation.x = rotationOffsetRef.current.x - mouseRef.current.y * 0.45;
      }

      // Mode-specific micro animations
      if (mode === 'ai-intelligent-experiences') {
        const outerChild = mainGroup.children[1];
        if (outerChild) {
          outerChild.rotation.y = -elapsedTime * 0.45;
          outerChild.rotation.z = elapsedTime * 0.2;
        }
      }

      renderer.render(scene, camera);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            clock.start();
            animate();
          }
        } else {
          isVisible = false;
          if (animFrameRef.current) {
            cancelAnimationFrame(animFrameRef.current);
            animFrameRef.current = null;
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    animate();

    return () => {
      observer.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      // Disposal of geometries and materials to free GPU memory
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, autoRotate]);

  return (
    <div
      ref={containerRef}
      data-cursor="Orbit 3D"
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden ${className}`}
    >
      {/* Raw 3D Presentation - No HUD labels or overlay frames */}

      {/* Configurator Material Presets Selector (when mode === 'product-configurators') */}
      {mode === 'product-configurators' && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-white/15">
          {(['titanium', 'obsidian', 'chrome', 'gold'] as const).map((preset) => (
            <button
              key={preset}
              onClick={(e) => {
                e.stopPropagation();
                applyMaterialPreset(preset);
              }}
              title={`Switch material to ${preset}`}
              className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activePreset === preset
                  ? 'bg-white text-black font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
