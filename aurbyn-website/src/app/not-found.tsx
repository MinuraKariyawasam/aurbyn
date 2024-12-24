"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const [isActive, setIsActive] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const circles = useRef<(HTMLDivElement | null)[]>([]);
  
  const colors = [
    "#10b981", // emerald-500
    "#2563eb", // blue-600
    "#34d399", // emerald-400
    "#3b82f6", // blue-500
  ];
  
  const size = isActive ? 400 : 30;
  const delay = 0.1;

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: { clientX: any; clientY: any; }) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY
    };
  };

  const moveCircles = (x: number, y: number) => {
    if (circles.current.length < 1) return;
    circles.current.forEach((circle) => {
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
    });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075)
    };
    
    moveCircles(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [isActive]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px]" />
      </div>

      {/* Cursor circles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={ref => { circles.current[i] = ref; }}
          style={{
            backgroundColor: colors[i],
            width: size,
            height: size,
            filter: `blur(${isActive ? 20 : 2}px)`,
            transition: `transform ${(4 - i) * delay}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`
          }}
          className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
        />
      ))}
      
      {/* 404 Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center min-h-[80vh] z-50"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <h1 className="text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600">
              404
            </span>
          </h1>
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-white font-bold tracking-tight">
              This investment opportunity has moved
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              But don't worry — there are plenty more innovative ventures to explore in our portfolio
            </p>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mt-6">
              <span className="text-white/60 text-sm">Even our 404 page has a better ROI than crypto</span>
              <span className="text-emerald-500 animate-pulse">↗</span>
            </div>
          </div>
          
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 
                     rounded-2xl font-semibold text-white shadow-lg shadow-emerald-500/20
                     hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
          >
            <span>Exit to Our Series A (Homepage)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;