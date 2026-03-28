"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Morphing blob shapes that react to mouse
function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = e.clientX / window.innerWidth;
      mouse.current.targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Floating orbs with organic motion
    const orbs = [
      { x: 0.3, y: 0.4, r: 280, color: [18, 80, 243], speed: 0.008, phase: 0 },
      { x: 0.7, y: 0.3, r: 220, color: [74, 122, 255], speed: 0.012, phase: 2 },
      { x: 0.5, y: 0.6, r: 200, color: [13, 58, 184], speed: 0.006, phase: 4 },
      { x: 0.4, y: 0.7, r: 160, color: [100, 80, 255], speed: 0.01, phase: 1 },
      { x: 0.6, y: 0.5, r: 240, color: [40, 100, 240], speed: 0.009, phase: 3 },
    ];

    // Particles that float and connect
    const particles: { x: number; y: number; vx: number; vy: number; size: number; life: number; maxLife: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0005,
        vy: (Math.random() - 0.5) * 0.0005,
        size: Math.random() * 2 + 0.5,
        life: Math.random() * 200,
        maxLife: 200 + Math.random() * 200,
      });
    }

    const draw = () => {
      time += 1;
      const w = canvas.width;
      const h = canvas.height;

      // Smooth mouse follow
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.03;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.03;

      ctx.clearRect(0, 0, w, h);

      // Draw morphing gradient orbs
      orbs.forEach((orb) => {
        const mx = mouse.current.x - 0.5;
        const my = mouse.current.y - 0.5;
        const offsetX = mx * 80;
        const offsetY = my * 80;

        // Organic movement
        const bx = (orb.x + Math.sin(time * orb.speed + orb.phase) * 0.08 + mx * 0.12) * w;
        const by = (orb.y + Math.cos(time * orb.speed * 0.7 + orb.phase) * 0.06 + my * 0.12) * h;

        // Morphing radius
        const r = (orb.r + Math.sin(time * orb.speed * 1.5 + orb.phase) * 40) * 2;

        const gradient = ctx.createRadialGradient(bx + offsetX, by + offsetY, 0, bx + offsetX, by + offsetY, r);
        gradient.addColorStop(0, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.15)`);
        gradient.addColorStop(0.5, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.05)`);
        gradient.addColorStop(1, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(bx + offsetX, by + offsetY, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Floating particles
      particles.forEach((p) => {
        p.life += 1;
        if (p.life > p.maxLife) {
          p.life = 0;
          p.x = Math.random();
          p.y = Math.random();
        }

        // Mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.15) {
          p.vx += dx * 0.0002;
          p.vy += dy * 0.0002;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.999;
        p.vy *= 0.999;

        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.6;

        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 160, 255, ${alpha})`;
        ctx.fill();
      });

      // Draw subtle connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = (particles[i].x - particles[j].x) * w;
          const dy = (particles[i].y - particles[j].y) * h;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const a1 = Math.sin((particles[i].life / particles[i].maxLife) * Math.PI);
            const a2 = Math.sin((particles[j].life / particles[j].maxLife) * Math.PI);
            ctx.beginPath();
            ctx.moveTo(particles[i].x * w, particles[i].y * h);
            ctx.lineTo(particles[j].x * w, particles[j].y * h);
            ctx.strokeStyle = `rgba(100, 140, 255, ${0.06 * (1 - dist / 200) * a1 * a2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Mouse glow
      const glowGradient = ctx.createRadialGradient(
        mouse.current.x * w, mouse.current.y * h, 0,
        mouse.current.x * w, mouse.current.y * h, 400
      );
      glowGradient.addColorStop(0, "rgba(74, 122, 255, 0.08)");
      glowGradient.addColorStop(1, "rgba(74, 122, 255, 0)");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

// Floating geometric wireframe shapes
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating ring */}
      <div
        className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 border border-ocher/10 rounded-full"
        style={{
          animation: "spin 20s linear infinite",
        }}
      />
      {/* Tilted ring */}
      <div
        className="absolute bottom-[20%] left-[8%] w-24 h-24 md:w-40 md:h-40 border border-ocher/8 rounded-full"
        style={{
          animation: "spin 30s linear infinite reverse",
          transform: "perspective(200px) rotateX(40deg)",
        }}
      />
      {/* Small diamond */}
      <div
        className="absolute top-[60%] right-[20%] w-4 h-4 border border-ocher-light/20 rotate-45"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      {/* Dot cluster */}
      <div className="absolute top-[30%] left-[15%]" style={{ animation: "float 8s ease-in-out infinite 1s" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-ocher/20" />
        <div className="w-1 h-1 rounded-full bg-ocher-light/15 mt-3 ml-4" />
        <div className="w-1.5 h-1.5 rounded-full bg-ocher/10 mt-2 -ml-1" />
      </div>
      {/* Horizontal line */}
      <div
        className="absolute top-[45%] left-[5%] w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-ocher/15 to-transparent"
        style={{ animation: "float 7s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute bottom-[35%] right-[5%] w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-ocher-light/10 to-transparent"
        style={{ animation: "float 9s ease-in-out infinite" }}
      />
    </div>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 100);
    const timer2 = setTimeout(() => setTextRevealed(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep dark gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0d1030_0%,#0B0B12_70%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(120,160,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120,160,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Interactive canvas with morphing orbs */}
      <InteractiveCanvas />

      {/* Floating geometric elements */}
      <FloatingShapes />

      {/* Noise grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-sm mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocher opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ocher" />
            </span>
            <span className="text-text-secondary tracking-wide">AI Venture Studio</span>
          </div>
        </div>

        {/* Heading with staggered reveal */}
        <div className="overflow-hidden mb-8">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-[-0.03em] leading-[0.9] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"
            }`}
          >
            <span className="block">Building the</span>
            <span
              className={`block mt-1 bg-gradient-to-r from-[#4A7AFF] via-[#7BA4FF] to-[#4A7AFF] bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
                textRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
              }`}
              style={{
                animation: textRevealed ? "gradient-shift 4s ease-in-out infinite" : "none",
              }}
            >
              future of AI
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p
          className={`text-base sm:text-lg md:text-xl text-text-secondary/80 max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ease-out delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ocher is a venture studio and incubator crafting intelligent systems
          that reshape industries. Founded by Boz Zou.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out delay-[900ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl bg-ocher text-white font-medium overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(18,80,243,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-ocher-dark to-ocher opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#story"
            className="group px-8 py-4 rounded-2xl border border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary hover:bg-white/[0.03] transition-all duration-500"
          >
            <span className="flex items-center gap-2">
              Our Story
              <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1.2s] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30 animate-bounce" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-elevated to-transparent" />
    </section>
  );
}
