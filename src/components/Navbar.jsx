import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      setIsScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Floating Glassmorphism Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#080B14]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Developer Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/60 group-hover:border-cyan-400/50 transition-all duration-300 shadow-inner">
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                {/* Glowing Online Status Indicator */}
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold tracking-wider text-base">
                  AKASH<span className="text-cyan-400">.DEV</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-widest -mt-1 uppercase">
                  CSE &apos;27
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              <div className="flex items-center px-2 py-1 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                        isActive 
                          ? 'text-cyan-300 font-semibold' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span 
                          className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full shadow-[0_0_8px_#38BDF8]" 
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Resume Download Button */}
              <a
                href="/Akash_Suresh_Kulkarni_Resume.pdf"
                download="Akash_Suresh_Kulkarni_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wide text-slate-100 bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-violet-500/20 hover:from-sky-500/30 hover:to-violet-500/30 border border-cyan-500/40 hover:border-cyan-400 rounded-lg shadow-sm hover:shadow-glow-cyan transition-all duration-300 active:scale-95"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
                <span className="text-[10px] text-cyan-400/80 px-1 py-0.2 rounded bg-cyan-950/60 border border-cyan-800/50">PDF</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="/Akash_Suresh_Kulkarni_Resume.pdf"
                download="Akash_Suresh_Kulkarni_Resume.pdf"
                className="p-2 text-cyan-400 hover:text-cyan-300 bg-slate-900/80 border border-slate-700/60 rounded-lg"
                title="Download Resume"
              >
                <FileDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 p-4 rounded-xl bg-[#0D1220]/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href="/Akash_Suresh_Kulkarni_Resume.pdf"
                  download="Akash_Suresh_Kulkarni_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 shadow-md transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Verified Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
