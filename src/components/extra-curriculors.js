import React from "react";

const extracurricularsData = [
  {
    title: "Wells Fargo Software Engineering Virtual Experience Program",
    certificateLink: "https://drive.google.com/file/d/1ZJ4qEaYVq4bI_PVtzLaS4nHz9oCUxkuu/view?usp=sharing",
    description: "Completed the Wells Fargo Software Engineering Virtual Experience, including tasks like data model creation and implementation."
  },
  {
    title: "Deloitte Technology Virtual Experience Program",
    certificateLink: "https://drive.google.com/file/d/1k4dsqyTHOv03XG6ngXAMjmvrtyDI2PpB/view?usp=sharing",
    description: "Completed the Deloitte Technology Virtual Experience, covering coding, data analysis, development, and cybersecurity tasks."
  },
  {
    title: "JP Morgan Chase & Co Software Engineering Virtual Experience Program",
    certificateLink: "https://drive.google.com/file/d/1_ysmR6o5LUCK8xRYb99Q0PmWL4gK-K3i/view?usp=sharing",
    description: "Completed the JP Morgan Chase & Co Virtual Experience, working with stock price data feeds and visualizing data for traders."
  },
  {
    title: "Flipkart GRiD 7.0 – National Semi-Finalist",
    certificateLink: "https://drive.google.com/file/d/1wtYyWWB5VGmJ4--BCHxqTfvTBmY0D8mK/view?usp=sharing",
    description: "Achieved National Semi-Finalist position in Flipkart GRiD 7.0, competing among top engineering students across India."
  }
];

const ExtraCurriculars = () => {
  return (
    <section className="extracurriculars-section" id="extra-curriculars">
      <h2 className="section-title">Extra-Curriculars & Certifications</h2>
      <div className="extracurriculars">
        {extracurricularsData.map((item, index) => (
          <div className="extracurricular-card" key={index}>
            <h3>
              {item.title} |{" "}
              <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                Certificate
              </a>
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurriculars;
