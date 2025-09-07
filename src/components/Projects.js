import React from "react";
import { FaGithub, FaDatabase, FaChartBar, FaHeartbeat } from "react-icons/fa";

const projects = [
  {
    title: "SERENIFY - MOOD-BASED MUSIC RECOMMENDATION APP",
    stack: ["React", "Spring Boot", "MySQL"],
    description:
      "Built a full-stack journaling app that detects user mood from text input using rule-based keyword mapping, recommends playlists for music therapy, and provides REST APIs with a MySQL schema and interactive React dashboards for mood history and trend tracking.",
    link: "https://github.com/jahnavii-25/SERENIFY",
    btnLabel: "Explore Project",
    icon: <FaGithub />,
  },
  {
    title: "NETFLIX ANALYTICS DASHBOARD",
    stack: ["Power BI"],
    description:
      "Developed an advanced Power BI dashboard with KPIs (shows, users, completion rates), visualizations (global viewership, age/device trends, genre/year releases), and DAX/Power Query transformations to deliver insights into user engagement, retention, and binge-watching patterns.",
    link: "https://thaparuniv-my.sharepoint.com/personal/jtiwari_be22_thapar_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjtiwari%5Fbe22%5Fthapar%5Fedu%2FDocuments%2FNetflix%2Epbix&parent=%2Fpersonal%2Fjtiwari_be22_thapar_edu%2FDocuments&ga=1",
    btnLabel: "Explore Dashboard",
    icon: <FaChartBar />,
  },
  {
    title: "JARVIS - AI ASSISTANT",
    stack: ["Python"],
    description:
      "Created an AI-powered virtual assistant using speech recognition and NLP for task automation, enabling real-time responses and productivity improvements.",
    link: "https://github.com/jahnavii-25/JARVIS",
    btnLabel: "Explore Project",
    icon: <FaGithub />,
  },
  {
    title: "LIBRARY MANAGEMENT SYSTEM",
    stack: ["SQL"],
    description:
      "Designed and implemented a relational database in MySQL for library operations (user registration, rentals/returns, fines, inventory) with a normalized schema, ER diagram, role-based access, stored procedures, and data validation.",
    link: "https://github.com/jahnavii-25/Library-Management-System",
    btnLabel: "Explore Project",
    icon: <FaDatabase />,
  },
  {
    title: "AURA – NEXT GEN HEALTH MONITORING SMARTWATCH (Ongoing)",
    stack: ["IoT", "Embedded Systems", "AI", "Sensors"],
    description:
      "Prototyping a smartwatch with biosensors (ECG, PPG, GSR, HRV) for real-time health monitoring, system architecture integration (sensors, microcontroller, AI analytics, mobile/cloud), and predictive health insights with emergency alerts.",
    link: "#",
    btnLabel: "Coming Soon",
    icon: <FaHeartbeat />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">🚀 Projects</h2>
        <div className="project-list">
          {projects.map(({ title, stack, description, link, btnLabel, icon }) => (
            <div key={title} className="project-card">
              <h3>{title}</h3>
              <div className="tech-stack">
                {stack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <p>{description}</p>
              {btnLabel && (
                <a
                  href={link !== "#" ? link : undefined}
                  target={link !== "#" ? "_blank" : undefined}
                  rel={link !== "#" ? "noopener noreferrer" : undefined}
                  className={`project-btn ${link === "#" ? "disabled" : ""}`}
                >
                  {icon} {btnLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
