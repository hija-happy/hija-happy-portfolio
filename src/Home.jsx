import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set up the font-changing animation
    const fonts = [
      "Lobster", "Roboto", "Poppins", "Open Sans", "Merriweather",
      "Monoton", "Pacifico", "Playfair Display", "Quicksand", "Work Sans",
      "Fredoka One", "Bangers", "Abril Fatface", "Alfa Slab One", "Amatic SC",
      "Chewy", "Press Start 2P"
    ];

    let fontIndex = 0;
    const changeFont = () => {
      const phrase = document.getElementById("changingFont");
      fontIndex = (fontIndex + 1) % fonts.length;
      phrase.style.fontFamily = fonts[fontIndex];
    };

    const interval = setInterval(changeFont, 1000); // Change font every 1 second
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    // Initialize particles.js for Home page only
    if (window.Particles) {
      window.Particles.init({
        selector: '#particles-js',
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          shape: {
            type: 'image',
            image: {
              src: "/images.png", // Update the path to ensure it's correct
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: false // Disable lines between particles
          },
          move: {
            enable: true,
            speed: 5,
            direction: 'bottom-right',
            random: true,
            straight: false,
            out_mode: 'out', // Particles disappear when they go out of bounds
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 1
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }

    // Cleanup particles on unmount
    return () => {
      if (window.Particles) {
        window.Particles.destroy();
      }
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/main'); // Navigates to the Continuous page
  };

  return (
    
    <div className="home-container">
      {/* Div for particles effect */}
      <div id="particles-js"></div>
      <h1 className="welcome-text">
        Hello, I'm <span id="changingFont"> Hija Happy </span>
      </h1>
      <p> Tech Explorer | UI Enthusiast | Creative Thinker </p>
      {/* Button to navigate to the main page */}
      <button className="squishy squishy-neon" onClick={handleButtonClick}>
        Explore More 🌸
      </button>
    </div>
  
  );
};

export default Home;
