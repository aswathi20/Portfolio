import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Spotlight from './components/Spotlight';
import Hero from './sections/Hero';
import AIAvatarGuide from './components/AIAvatarGuide';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 relative">
      <Spotlight />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AIAvatarGuide />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
