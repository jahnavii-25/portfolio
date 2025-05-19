import React from "react";

const Skills = () => {
  const skills = {
    Languages: "Java, Python, C, C++, JavaScript, HTML, CSS, SASS, Verilog, SQL",
    Libraries_and_Frameworks: "React.js, jQuery, Redux, Bootstrap, D3.js, JSON API, AJAX, PostgreSQL, Node.js, Express, MongoDB, Mongoose",
    Tools: "Git, GitHub, LINUX, Canva",
    Software: "Eagle, Arduino, MATLAB, Tableau, Blynk Software",
    Processor: "ARM",
    Course_Work: "Information Theory, Digital System Design, Operating Systems, Computer Architecture, Signals and Systems, Database Management Systems, AI",
    Soft_Skills: "Event Planning and Management, Content Writing, Time Management, Organization"
  };

  return (
    <div id="skills" style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Skills</h2>
      {Object.entries(skills).map(([section, content]) => (
        <div key={section} style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{section.replace(/_/g, " ")}</h3>
          <p className="text-gray-800 dark:text-gray-200">{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
