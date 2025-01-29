import React from 'react'
import "./Experience.css";
import experienceData from "../assets/jsons/experience.json"; // Use relative path


const Experience = () => {
    return (
      <section className="experience-section">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-item">

             
             
            <h2>{item.companyName}</h2>
            <p><strong>{item.role}</strong></p>
 {/* Display Description as Bullet Points */}
 <ul>
            {item.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Display Tech Stack as Tags */}
          <div className="tech-stack">
            {item.techStack.map((tech, i) => (
              <span key={i} className="tech-badge">{ tech }</span>
            ))}
          </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Experience;