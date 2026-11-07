import React from 'react';
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  ArrowUpRight, 
  CheckCircle2, 
  Eye, 
  Layers,
  Sparkles
} from 'lucide-react';
import ProjectPreview from './ProjectPreviews';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="glass-card rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Graphic / Interactive Preview Banner */}
      <div className="relative p-3 bg-[#070A12] border-b border-slate-800/80">
        <ProjectPreview type={project.previewType} project={project} />

        {/* Overlay category badge */}
        <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-1.5">
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#080B14]/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-sm">
            {project.badge || 'Engineering'}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
        <div>
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-slate-400">
            {project.category.map((cat, idx) => (
              <span key={cat} className="text-slate-400">
                {cat}{idx < project.category.length - 1 && ' •'}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Hero metric highlight */}
          {project.heroMetric && (
            <div className="mt-2 text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{project.heroMetric}</span>
            </div>
          )}

          {/* Short description */}
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Quick key highlights */}
          <div className="mt-4 space-y-1.5">
            {project.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 line-clamp-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
            
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </button>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  title="Open Live Web Application"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.dashboardUrl && (
                <a
                  href={project.dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 transition-colors"
                  title="Open Power BI Dashboard"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
