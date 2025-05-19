import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ toggleTheme, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Hamburger menu button on left for small screens */}
      <button
        className="menu-button"
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Hide logo on small screens */}
      <a href="#home" className="logo">
        JAHNAVI TIWARI
      </a>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={handleLinkClick}>
          About
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          Projects
        </a>
        <a href="#skills" onClick={handleLinkClick}>
          Skills
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Contact
        </a>
      </div>

      {/* Dark mode toggle button */}
      <button
        className="toggle-button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}
