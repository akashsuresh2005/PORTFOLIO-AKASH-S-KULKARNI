import React from 'react';
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  CheckCircle2, 
  Eye, 
  Sparkles
} from 'lucide-react';
import ProjectPreview from './ProjectPreviews';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="glass-card rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg">
      
      {/* 1. Card Top Header: Category & Badge with NO overlapping */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3.5 bg-[#090D18]/80 border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono font-medium text-slate-300">
            {project.category.join(' • ')}
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
          {project.badge || 'Engineering'}
        </span>
      </div>

      {/* 2. Interactive Preview Area with Clean Padding */}
      <div className="p-5 bg-[#060912]/90 border-b border-slate-800/70">
        <ProjectPreview type={project.previewType} project={project} />
      </div>

      {/* 3. Card Content Body */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Hero Metric Highlight */}
          {project.heroMetric && (
            <div className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{project.heroMetric}</span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-sm text-slate-300/90 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Deliverable Highlights */}
          <div className="pt-2 space-y-2">
            {project.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Action Buttons */}
        <div className="pt-3 border-t border-slate-800/80 space-y-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/70 border border-cyan-800/70 transition-colors"
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
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                  title="Open Live Deployment"
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 transition-colors shadow-sm"
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
