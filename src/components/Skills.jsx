import React, { useState, useMemo } from 'react';
import {
  Code2,
  Database,
  Terminal,
  Braces,
  Layers,
  Palette,
  Zap,
  FileCode,
  Sparkles,
  Server,
  Cpu,
  Network,
  KeyRound,
  HardDrive,
  TableProperties,
  FileSpreadsheet,
  BarChart3,
  Table,
  Binary,
  PieChart,
  LineChart,
  Sheet,
  BrainCircuit,
  Boxes,
  Eye,
  TrendingUp,
  Activity,
  Compass,
  GitBranch,
  Code,
  BookOpen,
  Cloud,
  Container,
  Search,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2,
  Database,
  Terminal,
  Braces,
  Layers,
  Palette,
  Zap,
  FileCode,
  Sparkles,
  Server,
  Cpu,
  Network,
  KeyRound,
  HardDrive,
  TableProperties,
  FileSpreadsheet,
  BarChart3,
  Table,
  Binary,
  PieChart,
  LineChart,
  Sheet,
  BrainCircuit,
  Boxes,
  Eye,
  TrendingUp,
  Activity,
  SearchCheck: Search,
  Compass,
  GitBranch,
  Code,
  BookOpen,
  Cloud,
  Container,
  FunctionSquare: Activity,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    let result = skillCategories;

    if (selectedCategory !== 'all') {
      result = result.filter((cat) => cat.id === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result
        .map((cat) => ({
          ...cat,
          skills: cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.desc.toLowerCase().includes(q) ||
              s.level.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.skills.length > 0);
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-24 bg-[#080B14] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] glow-orb-blue blur-[140px] -z-10 opacity-20" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] glow-orb-violet blur-[130px] -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan-blue">Arsenal</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive, structured inventory of languages, frameworks, analytical platforms, and foundational computer science domains.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Real-time search filter */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/90 border border-slate-800 focus:border-cyan-400/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 font-mono transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const accentBorder = 
              category.accent === 'blue'
                ? 'hover:border-sky-500/40'
                : category.accent === 'cyan'
                ? 'hover:border-cyan-500/40'
                : 'hover:border-violet-500/40';

            return (
              <div
                key={category.id}
                className={`glass-card p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 flex flex-col justify-between ${accentBorder}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <span>{category.title}</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {category.skills.length} techs
                    </span>
                  </div>

                  {/* Skills List within Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Terminal;
                      
                      return (
                        <div
                          key={skill.name}
                          className={`p-3 rounded-xl transition-all duration-200 border ${
                            skill.highlight
                              ? 'bg-slate-900/90 border-slate-700/80 hover:border-cyan-400/60 shadow-sm'
                              : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className={`p-1.5 rounded-lg ${
                                skill.highlight ? 'bg-cyan-950/80 text-cyan-300' : 'bg-slate-800 text-slate-400'
                              }`}>
                                <IconComponent className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                                {skill.name}
                              </span>
                            </div>

                            {skill.highlight && (
                              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                                KEY
                              </span>
                            )}
                          </div>

                          <div className="text-[11px] text-slate-400 font-mono line-clamp-1">
                            {skill.desc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Level Guidance */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Structured &amp; Tested</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Verified Proficiency
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No technical skills found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}

      </div>
    </section>
  );
}
