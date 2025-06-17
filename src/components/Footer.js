import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jahnavi Tiwari. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/jahnavii25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="separator">|</span>
        <a
          href="https://github.com/jahnavii-25"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
