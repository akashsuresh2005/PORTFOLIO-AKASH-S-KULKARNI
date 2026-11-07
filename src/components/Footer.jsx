import React from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  FileDown, 
  Heart,
  Cpu
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070E] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 glow-orb-blue blur-3xl -z-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-mono font-bold tracking-wider text-base text-white">
                AKASH<span className="text-cyan-400">.DEV</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Computer Science Engineering student at Bangalore Institute of Technology. Building intelligent, scalable, and verified software solutions across full-stack engineering and machine learning.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/akashsuresh2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-kulkarni-146a5a298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-sky-400/50 text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:akashraghvendra2654@gmail.com"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-violet-400/50 text-slate-300 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Arsenal</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">Elevate Labs Internship</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Engineering Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-300 transition-colors">Academic History</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Verified Credentials & Back to Top */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-2">
                Download Documents
              </div>
              <a
                href="/Akash_Suresh_Kulkarni_Resume.pdf"
                download="Akash_Suresh_Kulkarni_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-400 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Verified Resume (PDF)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-400/50 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Akash Suresh Kulkarni • Bangalore Institute of Technology &apos;27
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">All Systems Operational</span>
            <span>•</span>
            <span>React 18 + Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
