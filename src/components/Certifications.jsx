import React from 'react';
import { 
  Award, 
  Database, 
  Binary, 
  BarChart3, 
  Cloud, 
  Trophy, 
  CheckCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { certifications } from '../data/certifications';

const iconMap = {
  Database: Database,
  Binary: Binary,
  BarChart3: BarChart3,
  Cloud: Cloud,
  Trophy: Trophy,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#080B14] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] glow-orb-blue blur-[140px] -z-10 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements &amp; <span className="text-gradient-cyan-blue">Credentials</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Industry-recognized credentials, competitive programming benchmarks, and hackathon milestones.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;

            const accentBorder = 
              item.accent === 'amber' ? 'hover:border-amber-500/40' :
              item.accent === 'cyan' ? 'hover:border-cyan-500/40' :
              item.accent === 'blue' ? 'hover:border-sky-500/40' :
              item.accent === 'rose' ? 'hover:border-rose-500/40' :
              'hover:border-violet-500/40';

            const iconBadgeBg =
              item.accent === 'amber' ? 'bg-amber-950/80 text-amber-400 border-amber-800/60' :
              item.accent === 'cyan' ? 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60' :
              item.accent === 'blue' ? 'bg-sky-950/80 text-sky-400 border-sky-800/60' :
              item.accent === 'rose' ? 'bg-rose-950/80 text-rose-400 border-rose-800/60' :
              'bg-violet-950/80 text-violet-400 border-violet-800/60';

            return (
              <div
                key={item.id}
                className={`glass-card p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 flex flex-col justify-between group ${accentBorder}`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${iconBadgeBg} shadow-inner`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Issuer */}
                  <div className="text-xs font-mono font-medium text-cyan-400 mt-1">
                    {item.issuer}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Verified
                  </span>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-500">{item.date}</span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

