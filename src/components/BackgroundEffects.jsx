import React, { useMemo } from 'react';

export default function BackgroundEffects() {
  // Vibrant multi-hued neon particles
  const particles = useMemo(() => {
    const colors = ['#00F5FF', '#A855F7', '#38BDF8', '#10B981', '#F43F5E', '#F59E0B'];
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      x: (i * 3.1 + 4) % 100,
      y: (i * 4.7 + 9) % 100,
      size: (i % 3) + 1.8,
      duration: 14 + (i % 10),
      delay: (i % 6) * 1.2,
      opacity: 0.25 + (i % 4) * 0.12,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* High-Contrast Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-45" />

      {/* Vibrant Ambient Radial Auroras */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[600px] rounded-full glow-orb-blue blur-[130px] opacity-60 animate-pulse-slow" 
      />
      <div 
        className="absolute top-1/4 -left-36 w-[600px] h-[600px] rounded-full glow-orb-violet blur-[140px] opacity-45" 
      />
      <div 
        className="absolute top-1/2 -right-36 w-[650px] h-[650px] rounded-full glow-orb-cyan blur-[130px] opacity-40 animate-pulse-slow" 
      />
      <div 
        className="absolute top-2/3 left-1/4 w-[600px] h-[600px] rounded-full glow-orb-fuchsia blur-[150px] opacity-35" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full glow-orb-emerald blur-[140px] opacity-30" 
      />

      {/* Floating Vibrant Neon Spark Nodes */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              boxShadow: `0 0 12px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gentle gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070913]/30 to-[#070913] pointer-events-none" />
    </div>
  );
}
