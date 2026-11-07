import React, { useState, useMemo } from 'react';
import { Sparkles, Layers, Filter } from 'lucide-react';
import { projects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') return projects;
    return projects.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="projects" className="relative py-24 bg-[#080B14] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] glow-orb-blue blur-[150px] -z-10 opacity-20" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] glow-orb-violet blur-[140px] -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Things I&apos;ve <span className="text-gradient-cyan-blue">Built</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Turning ideas into intelligent, scalable and practical technology solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold shadow-glow-cyan'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Bottom Banner with Verification Notice */}
        <div className="mt-14 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>All repository links, deployment URLs, and metrics reflect verified engineering implementations.</span>
          </div>
          <a
            href="https://github.com/akashsuresh2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-mono font-medium underline underline-offset-4"
          >
            Explore all repositories on GitHub →
          </a>
        </div>

      </div>

      {/* In-depth Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
