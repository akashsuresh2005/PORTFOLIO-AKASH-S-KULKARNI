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
  Layers
} from 'lucide-react';

const roles = [
  'Software Engineer',
  'Data Analyst',
  'Machine Learning Engineer',
  'Python & SQL Specialist',
  'Problem Solver',
];

const floatingBadges = [
  { name: 'Python', icon: '🐍', color: '#38BDF8', top: '-14px', right: '24px' },
  { name: 'SQL (5★ Gold)', icon: '🗄️', color: '#22D3EE', bottom: '-15px', right: '40px' },
  { name: 'Express.js', icon: '⚡', color: '#10B981', top: '45%', right: '-24px' },
  { name: 'TensorFlow', icon: '🧠', color: '#F59E0B', bottom: '25%', left: '-20px' },
  { name: 'Power BI', icon: '📊', color: '#8B5CF6', top: '15%', left: '-22px' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at end of word
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
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

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Greeter Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/70 backdrop-blur-md shadow-sm">
              <span className="text-sm">👋</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                HELLO, WORLD!
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                I&apos;M <span className="text-gradient-cyan-blue">AKASH SURESH KULKARNI</span>
              </h1>

              <div className="text-base sm:text-lg text-slate-300 font-medium flex items-center gap-2 flex-wrap">
                <span>Computer Science Engineering Student</span>
                <span className="text-cyan-400 font-bold hidden sm:inline">•</span>
                <span className="text-cyan-300 font-mono">Bangalore Institute of Technology</span>
              </div>
            </div>

            {/* Dynamic Animated Typewriter Headline */}
            <div className="flex items-center min-h-[44px]">
              <span className="text-lg sm:text-2xl font-mono text-slate-200">
                &gt;&nbsp;
                <span className="text-sky-300 font-semibold">{displayedText}</span>
                <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1 translate-y-1 animate-pulse" />
              </span>
            </div>

            <p className="text-sm sm:text-base font-medium italic text-slate-400">
              &ldquo;Building intelligent solutions through code, data and innovation.&rdquo;
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
              I am a Computer Science Engineering student with a strong foundation in programming, databases, software systems, data analytics, and machine learning. I enjoy transforming complex problems into practical, scalable, and intelligent solutions through technology.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-glow-cyan transition-all duration-300 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Akash_Suresh_Kulkarni_Resume.pdf"
                download="Akash_Suresh_Kulkarni_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-500 shadow-sm transition-all duration-200 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400 w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/akashsuresh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:shadow-glow-cyan transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-kulkarni-146a5a298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-400/50 hover:shadow-glow-blue transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:akashraghvendra2654@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-violet-400/50 hover:shadow-glow-violet transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  BIT Bangalore &apos;27
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  CGPA: 9.26
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Developer Workspace & Terminal */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Behind Terminal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-sky-500/15 to-violet-500/15 rounded-3xl blur-2xl -z-10" />

            {/* Floating Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <div
                key={badge.name}
                className="hidden sm:flex absolute z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D1220]/90 border border-slate-700/80 shadow-lg text-xs font-mono font-medium text-slate-200 backdrop-blur-md animate-float pointer-events-none"
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                  animationDelay: `${idx * 1.2}s`,
                  borderColor: `${badge.color}40`,
                  boxShadow: `0 0 15px ${badge.color}25`,
                }}
              >
                <span>{badge.icon}</span>
                <span>{badge.name}</span>
              </div>
            ))}

            {/* Code Terminal Mockup Card */}
            <div className="w-full max-w-lg rounded-2xl bg-[#0B0F19]/95 border border-slate-700/70 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-glow-blue">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#080B14] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer.config.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  ready
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1.5 selection:bg-cyan-500/20">
                
                <div className="text-slate-500 italic">
                  // Portfolio Engineering Configuration
                </div>

                <div>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-sky-300">developer</span>{' '}
                  <span className="text-slate-400">=</span> {'{'}
                </div>

                <div className="pl-4">
                  <span className="text-cyan-400">name</span>:
                  <span className="text-emerald-300"> &quot;Akash Suresh Kulkarni&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-400">education</span>: {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">institution</span>: <span className="text-emerald-300">&quot;Bangalore Institute of Tech&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">degree</span>: <span className="text-emerald-300">&quot;B.E. Computer Science&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">graduation</span>: <span className="text-amber-300">2027</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">cgpa</span>: <span className="text-cyan-300">9.26</span>,
                </div>
                <div className="pl-4">{'}'},</div>

                <div className="pl-4">
                  <span className="text-cyan-400">role</span>:
                  <span className="text-emerald-300"> &quot;Software Engineer &amp; Data Analyst&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-400">skills</span>: [
                  <span className="text-amber-300">&quot;Python&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;SQL&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;C++&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Machine Learning&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Power BI&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Express.js&quot;</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-cyan-400">passion</span>:
                  <span className="text-emerald-300"> &quot;Building impactful solutions&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-400">status</span>:
                  <span className="text-sky-400"> &quot;Open for Engineering Roles&quot;</span>
                </div>

                <div>{'};'}</div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 text-slate-400 flex items-center justify-between">
                  <span className="text-slate-500">&gt; developer.deploySolution()</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    STATUS: 200 OK
                  </span>
                </div>

              </div>

              {/* Terminal Footer Telemetry */}
              <div className="px-5 py-2.5 bg-[#080B14]/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-cyan-400" /> UTF-8
                </span>
                <span className="flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-violet-400" /> SQL &amp; Python Core
                </span>
                <span className="text-cyan-400/80">Ln 24, Col 2</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
