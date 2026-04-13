import * as React from "react";
import { useRef, useEffect } from "react";

export function MouseEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return; // Skip on mobile for performance

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -100, y: -100 };
    const trail: { x: number; y: number; life: number }[] = [];
    const particles: { 
      x: number; y: number; 
      vx: number; vy: number; 
      size: number; rotation: number; rotationSpeed: number; 
      life: number; decay: number;
      type: 'petal' | 'spark';
      color?: string;
    }[] = [];
    const slashes: { x: number; y: number; life: number; angle: number }[] = [];

    const TRAIL_LENGTH = 15;
    const TRAIL_DECAY = 0.85;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    let lastMoveTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      // Throttle generating petals
      if (now - lastMoveTime < 16) {
        return;
      }
      lastMoveTime = now;

      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      trail.push({ x: mouse.x, y: mouse.y, life: 1.0 });

      if (Math.random() < 0.2) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 1,
          vy: Math.random() * 1 + 0.5,
          size: Math.random() * 4 + 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          life: 1.0,
          decay: 0.005 + Math.random() * 0.01,
          type: 'petal'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      slashes.push({
        x: clientX,
        y: clientY,
        life: 1.0,
        angle: Math.random() * Math.PI * 2 
      });

      for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        particles.push({
          x: clientX,
          y: clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 6 + 3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          life: 1.0,
          decay: 0.01 + Math.random() * 0.015,
          type: 'petal'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < trail.length; i++) {
        trail[i].life *= TRAIL_DECAY;
      }

      while (trail.length > 0 && trail[0].life < 0.05) {
        trail.shift();
      }

      if (trail.length > TRAIL_LENGTH) {
        trail.shift();
      }

      if (trail.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
           ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.stroke();
      }

      for (let i = slashes.length - 1; i >= 0; i--) {
        const slash = slashes[i];
        slash.life -= 0.06;
        if (slash.life <= 0) {
          slashes.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(slash.x, slash.y);
        ctx.rotate(slash.angle);
        
        const len = 300 * (1 - slash.life * 0.5) + 50; 
        const opacity = slash.life;
        const thickness = 3 * slash.life;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.moveTo(-len / 2, 0);
        ctx.lineTo(len / 2, 0);
        ctx.stroke();

        ctx.shadowBlur = 15;
        ctx.shadowColor = 'white';
        ctx.stroke();
        ctx.restore();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= p.decay;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.type === 'petal') {
            p.vy += 0.05; 
            p.vx *= 0.98;
        } else {
            p.vx *= 0.92;
            p.vy *= 0.92;
            p.vy += 0.1;
        }

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.life;

        if (p.type === 'petal') {
            ctx.fillStyle = '#fff0f5'; 
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(p.size, -p.size/2, p.size, p.size/2, 0, p.size);
            ctx.bezierCurveTo(-p.size, p.size/2, -p.size, -p.size/2, 0, 0);
            ctx.fill();
        } else {
            ctx.fillStyle = p.color || '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
      }

      requestAnimationFrame(loop);
    };

    const animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />;
}
