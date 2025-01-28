import React from 'react'
import "./About.css";
import Pic from "../../assets/pic.png"; // Move up two levels to the root and access assets


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p> Hi! I'm Hija Happy, a passionate designer and developer. I love
          creating unique and functional designs, combining creativity with
          technology to build something meaningful. In my free time, I enjoy
          sketching and photography, capturing the beauty of life in all its
          forms.
        </p>
      </div>

      <div className="about-image">
        <img src={Pic} alt="Hija Happy" />
      </div>
    </div>
  );
}

export default About