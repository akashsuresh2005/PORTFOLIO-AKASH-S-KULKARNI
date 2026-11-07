import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  Database,
  BarChart2,
  FileSpreadsheet
} from 'lucide-react';
import { experienceList } from '../data/certifications';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#080B14]/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] glow-orb-cyan blur-[140px] -z-10 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industry Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan-blue">Experience</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on technical contributions, production-grade exploratory data workflows, and applied predictive modeling.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Glowing central vertical timeline stem */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-sky-500/50 to-transparent" />

          {experienceList.map((exp, index) => (
            <div 
              key={exp.role + exp.company} 
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pl-10 md:pl-0"
            >
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#080B14] border-2 border-cyan-400 shadow-[0_0_12px_#38BDF8] z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="w-full md:w-[92%] mx-auto">
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/70 hover:border-cyan-400/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
                  
                  {/* Subtle Top Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-cyan-300">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Technologies Used Badges */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Contributions & Achievements */}
                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Deliverables &amp; Technical Execution:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.contributions.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Micro Metric Highlights */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Dataset Size</div>
                      <div className="text-sm font-bold text-cyan-300 font-mono">9,936 Records</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Model Accuracy</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono">R²: 0.52 &amp; 0.61</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Job Market Study</div>
                      <div className="text-sm font-bold text-sky-300 font-mono">3 Cities • 3 Roles</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Recommendation</div>
                      <div className="text-sm font-bold text-violet-400 font-mono">Cosine Sim Engine</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

