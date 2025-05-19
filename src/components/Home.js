import React from 'react';
import portfolioImage from '../assets/image.png'; // Updated path

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={portfolioImage} alt="Girl coding at laptop" />
      </div>
      <div className="home-text">
        <h1>Hello, I'm Jahnavi</h1>
        <p>Engineer | Developer | Problem Solver</p>
        <p>
          Welcome to my professional portfolio. Explore my projects, skills, and experiences below.
        </p>
      </div>
    </section>
  );
}
