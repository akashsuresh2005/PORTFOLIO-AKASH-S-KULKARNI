import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
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
  ArrowRight,
  Terminal,
  Clock,
  BookOpen
} from 'lucide-react';
import ProjectPreview from '../components/ProjectPreviews';
import { projects } from '../data/projects';

export default function ProjectDetails({ projectId, onBack, onNavigateProject }) {
  const project = projects.find((p) => p.id === projectId) || projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500/20 selection:text-cyan-200">
      
      {/* Ambient background glow */}
      <div className="max-w-5xl mx-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-300 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>System Spec Sheet</span>
          </div>
        </div>

        {/* Project Header Banner */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
              {project.badge || 'Engineering'}
            </span>
            {project.category.map((cat) => (
              <span key={cat} className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {project.fullTitle || project.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all"
              >
                <span>Open Live Deployment</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.dashboardUrl && (
              <a
                href={project.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 shadow-md transition-all"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Open Power BI Dashboard</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-slate-500 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Medical disclaimer if applicable */}
        {project.disclaimer && (
          <div className="mb-8 p-4 rounded-xl bg-amber-950/40 border border-amber-900/60 text-xs sm:text-sm text-amber-300 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span>{project.disclaimer}</span>
          </div>
        )}

        {/* Interactive Telemetry & Console Visualization */}
        <div className="mb-12 glass-card p-4 sm:p-6 rounded-2xl border border-slate-700/80 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Real-Time Model Console &amp; Sensor Simulation</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              Telemetry Online
            </span>
          </div>
          <ProjectPreview type={project.previewType} project={project} />
        </div>

        {/* In-Depth Technical Specification Sections */}
        {project.detailedData && (
          <div className="space-y-8 mb-12">
            
            {/* Problem & Proposed Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> 1. Problem Statement
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedData.problemStatement}
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> 2. Proposed Solution
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedData.proposedSolution}
                </p>
              </div>
            </div>

            {/* System Architecture */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" /> 3. System Architecture &amp; Data Pipeline
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.detailedData.systemArchitecture}
              </p>
            </div>

            {/* Machine Learning Pipeline & Deep Learning Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4" /> 4. Machine Learning Pipeline
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedData.mlPipeline}
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" /> 5. Deep Learning &amp; Explainability
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedData.deepLearningQuality}
                </p>
              </div>
            </div>

            {/* Results & Limitations */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 6. Results &amp; Practical Limitations
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.detailedData.resultsAndLimitations}
              </p>
            </div>

          </div>
        )}

        {/* Main Features Grid */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 mb-8 space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Engineering Capabilities &amp; Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 mb-12 space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Complete Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-700/80 text-cyan-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Other Projects Quick Navigation */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Explore Other Engineered Projects
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigateProject(p.id)}
                className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-400/50 text-left transition-all group"
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1">
                  {p.badge}
                </div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">
                  {p.title}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
