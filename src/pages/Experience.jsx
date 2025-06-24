import React from 'react'
import "./Experience.css";
import experienceData from "../assets/jsons/experience.json"; // Use relative path


const Experience = () => {
    return (
      <section className="experience-section">
       <div className="experience-container">
        <div className="section-header">
          <h1 className="section-title">Experience</h1>
          <div className="title-underline"></div>
        </div>

        <div className="experience-timeline">
          {experienceData.map((item,index)=>(
            <div className="experience-card" key={index}>
              
              {/* Expereinxe Header */}

              <div className="card-header">
                <div className="company-info">
                  <h2 className="company-name">{item.companyName}</h2>
                  <p className="role-title">{item.role}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>

              {/* Experience Details */}
              <div className="card-content">
                <div className="description-section">
                  <h3 className="section-subtitle">Key Responsibilities</h3>
                </div>
                <ul className="description-list">
                  {item.description.map((point,i)=>(
                    <li key={i} className="description-item">{point}</li>
                  ))}
                </ul>
              </div>

                  <div className="tech-section">
                    <h3 className="section-subtitle">Technologies Used</h3>
                    <div className="tech-stack">
                      {item.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

            </div>
          ))}
        </div>
       </div>
      </section>   
    );
  };
 
  export default Experience;