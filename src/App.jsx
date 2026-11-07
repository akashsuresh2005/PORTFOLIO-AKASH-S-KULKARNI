import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import ProjectDetails from './pages/ProjectDetails';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeProjectPage, setActiveProjectPage] = useState(null);

  // Check URL hash for direct project link (e.g. #project/pneuscan-ai)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        setActiveProjectPage(id);
      } else {
        setActiveProjectPage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '#projects';
    setActiveProjectPage(null);
  };

  const handleNavigateProject = (id) => {
    window.location.hash = `#project/${id}`;
    setActiveProjectPage(id);
  };

  return (
    <div className="relative min-h-screen bg-[#080B14] text-[#F8FAFC] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Background Animated Atmosphere */}
      <BackgroundEffects />

      {/* If viewing a dedicated project details page */}
      {activeProjectPage ? (
        <ProjectDetails
          projectId={activeProjectPage}
          onBack={handleBackToPortfolio}
          onNavigateProject={handleNavigateProject}
        />
      ) : (
        <>
          {/* 1. Navigation Bar */}
          <Navbar />

          <main className="relative z-10">
            {/* 2. Hero / Introduction */}
            <Hero />

            {/* 3. About Me */}
            <About />

            {/* 4. Technical Skills */}
            <Skills />

            {/* 5. Professional Experience */}
            <Experience />

            {/* 6. Featured Projects */}
            <Projects />

            {/* 7. Education */}
            <Education />

            {/* 8. Certifications and Achievements */}
            <Certifications />

            {/* 9. GitHub / Coding Profiles */}
            <CodingProfiles />

            {/* 10. Contact Section */}
            <Contact />
          </main>

          {/* 11. Footer */}
          <Footer />

          {/* Floating Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900/90 text-cyan-400 border border-slate-700/80 hover:border-cyan-400 hover:shadow-glow-cyan backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
