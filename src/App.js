// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import WorkExperience from './components/WorkExperience';
import ExtraCurriculars from './components/extra-curriculors';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Optional: save theme choice in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('portfolio-theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="page-content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <WorkExperience />
        <ExtraCurriculars />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
