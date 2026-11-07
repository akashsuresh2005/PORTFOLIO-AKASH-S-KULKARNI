import React, { useMemo } from 'react';

export default function BackgroundEffects() {
  // Generate stable random particle positions
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: (i * 3.7) % 100,
      y: (i * 5.3 + 7) % 100,
      size: (i % 3) + 1.5,
      duration: 18 + (i % 12),
      delay: (i % 7) * 1.5,
      opacity: 0.15 + (i % 4) * 0.08,
      color: i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#8B5CF6' : '#22D3EE',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-35" />

      {/* Top Ambient Radial Orbs */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full glow-orb-blue blur-[120px] opacity-40 animate-pulse-slow" 
      />
      <div 
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full glow-orb-violet blur-[140px] opacity-25" 
      />
      <div 
        className="absolute top-1/2 -right-48 w-[550px] h-[550px] rounded-full glow-orb-cyan blur-[130px] opacity-20" 
      />
      <div 
        className="absolute top-3/4 left-1/3 w-[600px] h-[600px] rounded-full glow-orb-blue blur-[150px] opacity-20" 
      />

      {/* Subtle Floating Neon Dust Particles */}
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
              boxShadow: `0 0 10px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080B14]/40 to-[#080B14] pointer-events-none" />
    </div>
  );
}

