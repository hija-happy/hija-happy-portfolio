import React from 'react'
import "./About.css";
import Pic from "../../assets/pic.png";

const About = () => {
  return (
    <div className="about-container">
    
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">About Me</h1>
          <div className="title-underline"></div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Text Content */}
          <div className="content-section">
            <div className="content-card">
              <div className="card-header">
                <div className="dot-indicator"></div>
                <h2>Hello There!</h2>
              </div>
              
              <p className="intro-text">
                Hi! I'm <span className="highlight-name">Hija Happy</span>, a passionate designer and developer who believes in the power of creativity and technology coming together to create something truly magical.
              </p>
              
              <p className="description-text">
                I love crafting unique and functional designs that not only look beautiful but also provide meaningful experiences. Every project is an opportunity to blend artistry with innovation.
              </p>
              
              <p className="description-text">
                When I'm not designing or coding, you'll find me sketching under cherry blossoms or exploring the world through my camera lens, always seeking to capture life's fleeting moments of beauty.
              </p>
            </div>

      
          </div>

          {/* Image Section */}
          <div className="image-section">
            <div className="image-container">
              {/* Decorative Elements */}
              <div className="deco-element deco-1"></div>
              <div className="deco-element deco-2"></div>
              <div className="deco-element deco-3"></div>
              
              {/* Main Image Container */}
              <div className="profile-frame">
                <div className="profile-inner">
                  <div className="profile-placeholder">
                    <div className="placeholder-icon">👩‍💻</div>
                    <p className="placeholder-text">Profile Image</p>
                    <p className="placeholder-subtext">Replace with your photo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Quote */}
              <div className="floating-quote">
                <p>"Creating beauty through code"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
  );
};

export default About