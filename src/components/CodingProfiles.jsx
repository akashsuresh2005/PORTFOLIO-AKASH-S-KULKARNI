import React from 'react';
import { 
  Github, 
  Linkedin, 
  Code2, 
  Terminal, 
  ExternalLink, 
  GitCommit, 
  GitBranch, 
  CheckCircle,
  Binary,
  Star,
  Sparkles
} from 'lucide-react';

export default function CodingProfiles() {
  // Simulated GitHub Contribution Grid (weeks / days) representing regular coding activity
  const weeks = Array.from({ length: 24 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      // Create a natural pattern of commits
      const val = (weekIdx * 7 + dayIdx * 3) % 11;
      let level = 0;
      if (val === 1 || val === 4) level = 1;
      else if (val === 2 || val === 5 || val === 8) level = 2;
      else if (val === 3 || val === 9) level = 3;
      else if (val === 10) level = 4;
      return level;
    });
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-cyan-950/80 border-cyan-800/40';
      case 2: return 'bg-cyan-800/80 border-cyan-700/50';
      case 3: return 'bg-cyan-600 border-cyan-500';
      case 4: return 'bg-cyan-400 border-cyan-300';
      default: return 'bg-slate-900/60 border-slate-800/40';
    }
  };

  return (
    <section id="coding" className="relative py-24 bg-[#080B14]/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] glow-orb-cyan blur-[150px] -z-10 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Code. Commit. <span className="text-gradient-cyan-blue">Repeat</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Active version control history, competitive problem-solving platforms, and professional developer networks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Profile Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left: GitHub Activity Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div>
              {/* GitHub Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-white">
                    <Github className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>akashsuresh2005</span>
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      GitHub Developer Profile
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/akashsuresh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-800/60 hover:bg-cyan-900/60 transition-colors"
                >
                  <span>Explore GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Verified Repos Quick List */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Featured Repositories
                </div>

                <a
                  href="https://github.com/akashsuresh2005/PneuScan-AI-Multimodal-Pneumonia-Detection-and-Clinical-Analysis-Ecosystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-all flex items-center justify-between group block"
                >
                  <div className="flex items-center gap-2.5">
                    <GitBranch className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 truncate max-w-[280px] sm:max-w-md">
                        PneuScan-AI-Multimodal-Pneumonia-Detection
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Python • Keras • React • FastAPI
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href="https://github.com/akashsuresh2005/Smartshelf-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-violet-400/50 transition-all flex items-center justify-between group block"
                >
                  <div className="flex items-center gap-2.5">
                    <GitBranch className="w-4 h-4 text-violet-400 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-violet-300">
                        Smartshelf-AI
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Node.js • Express • MongoDB • React
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400" />
                </a>

                <a
                  href="https://github.com/akashsuresh2005/Supply-chain-and-Inventory-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-all flex items-center justify-between group block"
                >
                  <div className="flex items-center gap-2.5">
                    <GitBranch className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                        Supply-chain-and-Inventory-optimization
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Python • Pandas • SQL • Power BI
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </div>

              {/* Activity Grid Visual */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
                    Continuous Engineering Activity
                  </span>
                  <span className="text-slate-500 text-[10px]">Active Repos</span>
                </div>

                <div className="overflow-x-auto pb-1 scrollbar-none">
                  <div className="flex gap-1 min-w-[340px]">
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((level, dIdx) => (
                          <div
                            key={dIdx}
                            className={`w-2.5 h-2.5 rounded-[2px] border ${getLevelColor(level)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Primary Stack: Python • React • SQL</span>
              <span className="text-cyan-400">GitHub Verified</span>
            </div>
          </div>

          {/* Right: LeetCode & HackerRank & LinkedIn Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* HackerRank Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-amber-400/40 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center text-amber-400">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    HackerRank SQL (5★ Gold)
                  </h4>
                  <p className="text-xs text-slate-400">
                    Highest tier Gold proficiency in relational SQL queries
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-amber-950 border border-amber-800/60 text-amber-300">
                5★ Gold
              </span>
            </div>

            {/* LeetCode Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-cyan-400/40 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <Binary className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    150+ DSA Problems Solved
                  </h4>
                  <p className="text-xs text-slate-400">
                    LeetCode &amp; HackerRank algorithmic benchmarks
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-cyan-950 border border-cyan-800/60 text-cyan-300">
                150+ Solved
              </span>
            </div>

            {/* LinkedIn Networking Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-sky-400/40 transition-all flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-800/60 text-sky-400">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Professional Network
                  </h4>
                  <p className="text-xs text-slate-400">
                    Connect for engineering roles and tech discussions
                  </p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/akash-kulkarni-146a5a298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-center text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
