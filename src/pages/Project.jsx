import { useState } from 'react';
import projectsData from "../assets/jsons/projectsData.json";
import "./Project.css";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle">Showcasing my latest work and innovations</p>
          <div className="title-underline"></div>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, id) => (
            <div 
              key={project.id} 
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="card-inner">
                <div className="project-image-container">
                  <img 
                    src={project.projectImage} 
                    alt={project.projectTitle}
                    className="project-image"
                  />
                   <div className="image-overlay">
                    <div className="project-status">
                      <span className={`status-badge ${project.status ? project.status.toLowerCase().replace(' ', '-') : 'completed'}`}>
                        {project.status || 'Completed'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>

                  <div className="project-features">
                    <h4 className="features-title">Key Features</h4>
                    <ul className="features-list">
                      {project.projectDescription.map((feature, i) => (
                        <li key={i} className="feature-item">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h4 className="tech-title">Technologies</h4>
                    <div className="tech-stack">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                  
                    <a href={project.projectLink} className="action-btn code-btn">
                      <span>Source Code</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="footer-text">Want to see more projects?</p>
          <a href="https://github.com/hija-happy" className="view-all-btn">
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;