import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  BarChart3, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Layers, 
  Activity, 
  ShieldAlert, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import ProjectPreview from './ProjectPreviews';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl my-auto rounded-2xl bg-[#0D1220] border border-slate-700/80 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080B14] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
              {project.badge || 'Technical Specification'}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // ID: {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 scrollbar-thin">
          
          {/* Main Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.fullTitle || project.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all"
              >
                <span>Live Demo Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.dashboardUrl && (
              <a
                href={project.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-md transition-all"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Interactive Power BI Dashboard</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Source Code Repository</span>
              </a>
            )}
          </div>

          {/* Medical / Regulatory Disclaimer if applicable */}
          {project.disclaimer && (
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-900/60 text-xs text-amber-300 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Embedded Interactive Visual Dashboard Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Interactive System Console &amp; Model Visualization
              </span>
              <span className="text-[11px] font-mono text-cyan-400">High-Fidelity Preview</span>
            </div>
            <ProjectPreview type={project.previewType} project={project} />
          </div>

          {/* Detailed Engineering Breakdown */}
          {project.detailedData && (
            <div className="space-y-6 pt-4 border-t border-slate-800">
              
              {/* Problem & Proposed Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Problem Statement
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.detailedData.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Proposed Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.detailedData.proposedSolution}
                  </p>
                </div>
              </div>

              {/* System Architecture */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> System Architecture &amp; Data Flow
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedData.systemArchitecture}
                </p>
              </div>

              {/* Machine Learning & Deep Learning Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> Machine Learning Pipeline
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.detailedData.mlPipeline}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Deep Learning &amp; Explainability
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.detailedData.deepLearningQuality}
                  </p>
                </div>
              </div>

              {/* Results & Limitations */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Results &amp; Practical Limitations
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedData.resultsAndLimitations}
                </p>
              </div>

            </div>
          )}

          {/* Key Features Bullet List */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Core Capabilities &amp; Engineering Features:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Technology Stack Badges */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technology Stack:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-700/80 text-cyan-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#080B14] border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">ESC</kbd> to exit
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}

