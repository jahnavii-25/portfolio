import React from "react";

const projects = [
  {
    title: "JARVIS - AI Assistant | Python",
    description: "Developed an AI-powered virtual assistant for task automation using speech recognition and natural language processing. Improved user productivity with real-time responses and task execution.",
    link: "https://github.com/jahnavii-25/JARVIS",
  },
  {
    title: "Medicine Reminder | Python",
    description: "Designed a notification-based medication management app for Alzheimer’s patients using Tkinter for GUI. Enhanced user health adherence through intuitive alerts.",
    link: "https://github.com/jahnavii-25/medicine-reminder",
  },
  {
    title: "SPEECH TO TEXT | React.js",
    description: "Created a web application for real-time speech transcription leveraging React and Web Speech API. Enabled accessibility features for users with hearing impairments.",
    link: "https://github.com/jahnavii-25/Speech-to-Text",
  },
  {
    title: "TIC TAC TOE | JAVA",
    description: "Built an interactive Tic Tac Toe game with an intuitive user interface and smooth gameplay logic.",
    link: "https://github.com/jahnavii-25/TIC-TAC-TOE",
  },
  {
    title: "PASSWORD GENERATOR | HTML, CSS, JS",
    description: "Developed a customizable password generation tool supporting multiple complexity levels for enhanced security.",
    link: "https://github.com/jahnavii-25/Password-generator",
  },
  {
    title: "LIBRARY MANAGEMENT SYSTEM | SQL",
    description: "Developed a MySQL-based library management system with normalized schema, role-based access, and stored procedures for secure operations.",
    link: "https://github.com/jahnavii-25/Library-Management-System",
  },
  {
    title: "WATER LEVEL MONITORING SYSTEM | Arduino, Blynk",
    description: "IoT system with NodeMCU and ultrasonic sensor monitors water tank levels, controls pump via relay, and offers remote viewing through Blynk. Ideal for smart homes and agriculture.",
    link: "https://github.com/jahnavii-25/Water-Level-Monitoring",
  },
  {
    title: "SPACEX LANDING PAGE CLONE | HTML,CSS,JS",
    description: "Replicated the SpaceX landing page design and interactivity to improve web development skills.",
    link: "https://github.com/jahnavii-25/SpaceX-landing-page-clone",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map(({ title, description, link }) => (
            <div key={title} className="project-card">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
