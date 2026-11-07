import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal as TerminalIcon, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Database,
  Play,
  RotateCcw
} from 'lucide-react';

const roles = [
  'Software Engineer',
  'Data Analyst',
  'Machine Learning Engineer',
  'Python & SQL Specialist',
  'Problem Solver',
];

const floatingBadges = [
  { name: 'Python', icon: '🐍', color: '#00F5FF', glow: 'rgba(0, 245, 255, 0.45)', top: '-14px', right: '24px', anim: 'animate-float' },
  { name: 'SQL (5★ Gold)', icon: '⭐', color: '#F59E0B', glow: 'rgba(245, 158, 11, 0.45)', bottom: '-15px', right: '40px', anim: 'animate-float-reverse' },
  { name: 'Power BI', icon: '📊', color: '#EC4899', glow: 'rgba(236, 72, 153, 0.45)', top: '15%', left: '-22px', anim: 'animate-float' },
  { name: 'TensorFlow', icon: '🧠', color: '#10B981', glow: 'rgba(16, 185, 129, 0.45)', bottom: '25%', left: '-20px', anim: 'animate-float-reverse' },
  { name: 'Express.js', icon: '⚡', color: '#A855F7', glow: 'rgba(168, 85, 247, 0.45)', top: '48%', right: '-24px', anim: 'animate-float' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);
  const [executionState, setExecutionState] = useState('idle'); // 'idle' | 'running' | 'success'

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(45);
      }, 2200);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(110);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  const handleRunCode = () => {
    setExecutionState('running');
    setTimeout(() => {
      setExecutionState('success');
    }, 700);
  };

  const handleResetCode = () => {
    setExecutionState('idle');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Vibrant Greeter Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,255,0.2)]">
              <span className="text-sm">👋</span>
              <span className="font-mono text-xs font-bold tracking-wider text-cyan-300 uppercase">
                HELLO, WORLD!
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                I&apos;M <span className="text-gradient-vibrant">AKASH SURESH KULKARNI</span>
              </h1>

              <div className="text-base sm:text-lg text-slate-300 font-medium flex items-center gap-2 flex-wrap">
                <span className="text-cyan-200">Computer Science Engineering Student</span>
                <span className="text-cyan-400 font-bold hidden sm:inline">•</span>
                <span className="text-fuchsia-300 font-mono">Bangalore Institute of Technology</span>
              </div>
            </div>

            {/* Dynamic Animated Typewriter Headline */}
            <div className="flex items-center min-h-[44px]">
              <span className="text-lg sm:text-2xl font-mono text-slate-200">
                &gt;&nbsp;
                <span className="text-cyan-300 font-bold drop-shadow-[0_0_12px_rgba(0,245,255,0.5)]">
                  {displayedText}
                </span>
                <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1.5 translate-y-1 animate-pulse" />
              </span>
            </div>

            <p className="text-sm sm:text-base font-medium italic text-slate-300">
              &ldquo;Building intelligent solutions through code, data and innovation.&rdquo;
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-300/95 leading-relaxed max-w-2xl">
              I am a Computer Science Engineering student with a strong foundation in programming, databases, software systems, data analytics, and machine learning. I enjoy transforming complex problems into practical, scalable, and intelligent solutions through technology.
            </p>

            {/* Call To Action Buttons with Shimmer & Glow */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-shimmer group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:shadow-glow-cyan transition-all duration-300 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Akash_Suresh_Kulkarni_Resume.pdf"
                download="Akash_Suresh_Kulkarni_Resume.pdf"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/90 hover:border-cyan-400/80 shadow-md transition-all duration-200 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-fuchsia-400/80 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Highlights with vibrant borders */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400 w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/akashsuresh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-kulkarni-146a5a298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:akashraghvendra2654@gmail.com"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-fuchsia-300 hover:border-fuchsia-400/60 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  BIT Bangalore &apos;27
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  CGPA: 9.26
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Developer Workspace & Terminal */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Behind Terminal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-indigo-500/25 rounded-3xl blur-3xl -z-10" />

            {/* Floating Vibrant Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <div
                key={badge.name}
                className={`hidden sm:flex absolute z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F1E]/95 border shadow-lg text-xs font-mono font-bold text-white backdrop-blur-md pointer-events-none transition-all ${badge.anim}`}
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                  animationDelay: `${idx * 1.3}s`,
                  borderColor: badge.color,
                  boxShadow: `0 0 18px ${badge.glow}`,
                }}
              >
                <span>{badge.icon}</span>
                <span style={{ color: badge.color }}>{badge.name}</span>
              </div>
            ))}

            {/* Code Terminal Mockup Card */}
            <div className="w-full max-w-lg rounded-2xl bg-[#090D18]/95 border border-cyan-500/30 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(0,245,255,0.18)] overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,0.3)]">
              
              {/* Terminal Titlebar with Interactive Run Button */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#060810] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-[0_0_8px_#f43f5e]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]" />
                </div>
                
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer.config.ts</span>
                </div>

                <div className="flex items-center gap-2">
                  {executionState === 'idle' ? (
                    <button
                      onClick={handleRunCode}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/60 hover:bg-emerald-900 transition-colors text-[10px] font-mono font-bold"
                      title="Run Code Simulation"
                    >
                      <Play className="w-3 h-3 fill-emerald-300 text-emerald-300" />
                      <span>Run</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleResetCode}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors text-[10px] font-mono font-semibold"
                      title="Reset Console"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 space-y-1.5 selection:bg-cyan-500/30">
                
                <div className="text-slate-400 italic">
                  // Professional Engineering Profile
                </div>

                <div>
                  <span className="text-fuchsia-400 font-semibold">const</span>{' '}
                  <span className="text-sky-300 font-bold">developer</span>{' '}
                  <span className="text-slate-400">=</span> {'{'}
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">name</span>:
                  <span className="text-emerald-300"> &quot;Akash Suresh Kulkarni&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">education</span>: {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">institution</span>: <span className="text-emerald-300">&quot;Bangalore Institute of Tech&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">degree</span>: <span className="text-emerald-300">&quot;B.E. Computer Science&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">graduation</span>: <span className="text-amber-300 font-bold">2027</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">cgpa</span>: <span className="text-cyan-400 font-bold">9.26</span>,
                </div>
                <div className="pl-4">{'}'},</div>

                <div className="pl-4">
                  <span className="text-cyan-300">role</span>:
                  <span className="text-emerald-300"> &quot;Software Engineer &amp; Data Analyst&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">skills</span>: [
                  <span className="text-amber-300">&quot;Python&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;SQL (5★)&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;C++&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Machine Learning&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Power BI&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Express.js&quot;</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">passion</span>:
                  <span className="text-emerald-300"> &quot;Building impactful solutions&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">status</span>:
                  <span className="text-sky-300 font-semibold"> &quot;Open for Engineering Roles&quot;</span>
                </div>

                <div>{'};'}</div>

                {/* Simulated Live Console Execution Strip */}
                {executionState === 'running' && (
                  <div className="pt-3 border-t border-slate-800 mt-3 text-cyan-300 flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Compiling model graph &amp; validating queries...</span>
                  </div>
                )}

                {executionState === 'success' && (
                  <div className="pt-3 border-t border-slate-800 mt-3 space-y-1 text-emerald-400 text-xs">
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                      <span>STATUS: 200 OK • ALL SYSTEMS VERIFIED</span>
                    </div>
                    <div className="text-slate-400 text-[11px] pl-3.5">
                      ✔ 9,936 Records Analyzed • 150+ DSA Solved • 9.26 CGPA
                    </div>
                  </div>
                )}

                {executionState === 'idle' && (
                  <div className="pt-3 border-t border-slate-800 mt-3 text-slate-400 flex items-center justify-between">
                    <span className="text-slate-500">&gt; developer.deploySolution()</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
                      READY
                    </span>
                  </div>
                )}

              </div>

              {/* Terminal Footer Telemetry */}
              <div className="px-5 py-2.5 bg-[#060810] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> UTF-8
                </span>
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-fuchsia-400" /> SQL &amp; Python Core
                </span>
                <span className="text-cyan-400 font-bold">Ln 24, Col 2</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
