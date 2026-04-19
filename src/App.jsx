import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500 font-sans text-zinc-900 dark:text-zinc-100 selection:bg-purple-100 dark:selection:bg-purple-900/30">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <TechMarquee />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}