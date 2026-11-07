import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { educationList } from '../data/certifications';

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-[#080B14]/90 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] glow-orb-violet blur-[140px] -z-10 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="text-gradient-cyan-blue">Journey</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            A solid grounding in Computer Science fundamentals, algorithm design, software systems, and sciences.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Academic Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu, index) => {
            const isCollege = index === 0;

            return (
              <div
                key={edu.degree}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/70 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-lg"
              >
                {/* Top Border Gradient */}
                <div 
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
                    isCollege ? 'from-cyan-400 to-sky-500' : 'from-violet-500 to-purple-500'
                  }`} 
                />

                <div>
                  {/* Badge & Dates */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      isCollege 
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                        : 'bg-violet-950/80 text-violet-300 border border-violet-800/60'
                    }`}>
                      {edu.scoreLabel}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>

                  {/* Score Highlight Box */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">Academic Score</span>
                    <span className={`text-base font-extrabold font-mono ${
                      isCollege ? 'text-cyan-400' : 'text-violet-400'
                    }`}>
                      {edu.score}
                    </span>
                  </div>

                  {/* Highlights List */}
                  <div className="mt-5 space-y-2">
                    {edu.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Status Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Status:</span>
                  <span className="text-slate-300">{edu.status}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
