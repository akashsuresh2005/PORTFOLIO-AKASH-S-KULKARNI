import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Lightbulb, 
  Compass, 
  BookOpen, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

const stats = [
  { label: 'Academic CGPA', value: '9.26', sub: 'Bangalore Inst of Tech' },
  { label: 'Problems Solved', value: '150+', sub: 'LeetCode & HackerRank' },
  { label: 'Combinations Analyzed', value: '~30K', sub: 'Product-store data' },
  { label: 'Records Processed', value: '9,936', sub: 'Movie records in EDA' },
];

const pillars = [
  {
    title: 'Problem Solver',
    desc: 'Passionate about dismantling intricate business and engineering challenges into structured, scalable algorithmic solutions.',
    icon: Lightbulb,
    color: 'from-sky-500/20 to-cyan-500/20',
    border: 'border-sky-500/30',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Technology Enthusiast',
    desc: 'Continuously diving into scalable backend architectures, machine learning models, and cloud-native databases.',
    icon: Compass,
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/30',
    iconColor: 'text-violet-400',
  },
  {
    title: 'Continuous Learner',
    desc: 'Dedicated to staying ahead through hands-on technical internships, hackathons, and rigorous data science practices.',
    icon: BookOpen,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#080B14]/60 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-orb-violet blur-3xl -z-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3.5 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond the <span className="text-gradient-cyan-blue">Code</span>.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Two-Column Grid with Generous Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Developer Profile Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-card p-7 sm:p-8 rounded-2xl relative overflow-hidden h-full flex flex-col justify-between border-slate-700/60 shadow-xl space-y-6">
              
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />
              
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-black text-cyan-300 text-xl shadow-inner">
                      AK
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        AKASH SURESH KULKARNI
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
                    2023 - 2027
                  </span>
                </div>

                {/* Academic Cards */}
                <div className="mt-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                        <GraduationCap className="w-4 h-4 text-sky-400" />
                        Undergraduate Degree
                      </span>
                      <span className="text-cyan-400 font-bold">CGPA: 9.26</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Bachelor of Engineering (B.E.)
                    </div>
                    <div className="text-xs text-slate-400">
                      Computer Science &amp; Engineering
                    </div>
                    <div className="text-xs font-medium text-slate-300 flex items-center gap-1">
                      <span>Bangalore Institute of Technology</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                        <Award className="w-4 h-4 text-violet-400" />
                        Pre-University (Science)
                      </span>
                      <span className="text-violet-400 font-bold">95.0%</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Tungal Science PU College
                    </div>
                    <div className="text-xs text-slate-400">
                      Jamkhandi, Bagalkot (PCMC Stream)
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Achievements Micro List */}
              <div className="pt-5 border-t border-slate-800/80 space-y-2.5">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Highlights
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>5★ Gold SQL Badge on HackerRank</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Elevate Labs Data Analyst Intern (Summer 2026)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Oracle Cloud (OCI) AI Foundations Associate Certified</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Introduction & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Storytelling Text */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science Engineering student at <strong className="text-white">Bangalore Institute of Technology</strong>, passionate about software engineering, data analytics, and artificial intelligence.
              </p>
              <p>
                My technical journey involves architecting robust software systems, developing machine learning solutions, analyzing large datasets, and creating interactive dashboards that transform raw data into meaningful business intelligence.
              </p>
              <p>
                Through internships and engineering projects, I have gained practical experience working with <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Python</span>, <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">SQL</span>, <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">FastAPI</span>, <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Node.js</span>, <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Express.js</span>, <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Power BI</span>, <span className="text-cyan-300 font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700">TensorFlow</span>, and modern development technologies.
              </p>
              <p>
                I enjoy solving challenging technical problems, exploring emerging technologies, and continuously improving my engineering skills.
              </p>
              <p className="font-semibold text-slate-100 border-l-2 border-cyan-400 pl-4 py-0.5">
                I am actively looking for opportunities where I can contribute, learn, and grow as a software engineer.
              </p>
            </div>

            {/* Three Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`glass-card p-4 rounded-xl border ${pillar.border} flex flex-col justify-between`}
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-3">
                        <IconComponent className={`w-4 h-4 ${pillar.iconColor}`} />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verified Numerical Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-slate-800/80">
              {stats.map((s) => (
                <div key={s.label} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
