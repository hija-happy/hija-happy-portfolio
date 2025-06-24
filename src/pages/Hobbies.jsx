import React, { useState, useEffect } from 'react';
import "./Hobbies.css";

const Hobbies = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const hobbiesData = [
    {
      id: 1,
      icon: "🎨",
      title: "Design",
      subtitle: "Creative Solutions",
      description: "Transforming ideas into visually stunning experiences through modern design principles and user-centered approaches.",
      skills: ["UI/UX Design", "Brand Identity", "Color Theory", "Typography"],
      color: "design"
    },
    {
      id: 2,
      icon: "💻",
      title: "Development",
      subtitle: "Modern Tech",
      description: "Building innovative web applications with cutting-edge technologies and best practices for optimal performance.",
      skills: ["React", "Node.js", "Python", "Cloud Computing"],
      color: "development"
    },
    {
      id: 3,
      icon: "✏️",
      title: "Sketching",
      subtitle: "Artistic Expression",
      description: "Capturing imagination through traditional and digital sketching techniques, bringing concepts to life on paper.",
      skills: ["Digital Art", "Concept Art", "Character Design", "Illustrations"],
      color: "sketching"
    },
    {
      id: 4,
      icon: "📸",
      title: "Photography",
      subtitle: "Capturing Moments",
      description: "Freezing precious moments in time through the lens, exploring light, composition, and storytelling.",
      skills: ["Portrait Photography", "Landscape", "Street Photography", "Photo Editing"],
      color: "photography"
    }
  ];

  return (
    <section className="hobbies-section">
      <div className="hobbies-container">
        <div className="section-header">
          <h1 className="section-title">My Passions</h1>
          <p className="section-subtitle">Where creativity meets technology</p>
          <div className="title-underline"></div>
        </div>

        <div className={`hobbies-grid ${isVisible ? 'visible' : ''}`}>
          {hobbiesData.map((hobby, index) => (
            <div 
              key={hobby.id}
              className={`hobby-card ${hobby.color} ${activeCard === hobby.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(hobby.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-container">
                    <div className="icon-bg"></div>
                    <span className="hobby-icon">{hobby.icon}</span>
                  </div>
                  <h3 className="hobby-title">{hobby.title}</h3>
                  <p className="hobby-subtitle">{hobby.subtitle}</p>
                  <div className="card-glow"></div>
                </div>

                <div className="card-back">
                  <div className="back-content">
                    <div className="back-header">
                      <span className="back-icon">{hobby.icon}</span>
                      <h4 className="back-title">{hobby.title}</h4>
                    </div>
                    <p className="back-description">{hobby.description}</p>
                    <div className="skills-list">
                      {hobby.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        <div className="section-footer">
          <p className="footer-quote">"Passion is the fuel that drives innovation"</p>
          <div className="pulse-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;