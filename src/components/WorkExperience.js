import React from "react";
import "../App.css"; // Using main CSS with light/dark mode support

const experienceData = [
  {
    role: "Intern – Endava Solutions",
    location: "Remote",
    duration: "June 2025 – July 2025",
    details: [
      "Built interactive Power BI dashboards for business KPIs",
      "Gained hands-on experience with Java OOP, RESTful APIs, and CRUD operations in Spring Boot using Postman",
      "Implemented controller-service-repository layering with key annotations for modular backend design"
    ]
  },
  {
    role: "Mentor – IETE Student’s Forum",
    location: "Thapar Institute of Engineering and Technology, Patiala",
    duration: "2023 – 2024",
    details: [
      "Developed an AI Assistant (Python) and an Arduino-based distance measurement device",
      "Mentored peers and supported event organization, ensuring smooth execution and high engagement"
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience">
        {experienceData.map((exp, index) => (
          <div className="card experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="experience-location">{exp.location}</p>
            <p className="experience-duration">{exp.duration}</p>
            <ul>
              {exp.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
