import React from "react";

const skillsData = {
  "Languages": ["Java", "Python", "C", "C++", "JavaScript", "HTML", "CSS", "SASS", "Verilog"],
  "Frameworks & Databases": ["React.js", "jQuery", "Redux", "Bootstrap", "MySQL", "Spring Boot"],
  "Tools & Platforms": ["Git", "GitHub", "LINUX", "Canva", "Postman", "Power BI", "Tableau", "MATLAB", "Arduino", "Eagle", "Blynk"],
  "Course Work": ["Data Structures and Algorithms", "AI", "Deep Learning", "Database Management Systems", "Operating Systems", "Computer Architecture", "ARM"],
  "Soft Skills": ["Event Planning and Management", "Content Writing", "Time Management", "Organization"]
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="card" key={category}>
            <h3>{category}</h3>
            <div>
              {skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
