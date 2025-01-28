import React, { useEffect } from 'react';
import "./Home.css";


const Home =( ) => {


    useEffect(() => {
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
    // Initialize particles.js or similar particle animation library
    if (window.Particles) {
      window.Particles.init({
        selector: '#particles-js',
        maxParticles: 100,
        sizeVariations: 3,
        speed: 0.5
      });
    }
  }, []);


useEffect(() => {
  // Clean up particles when the component is unmounted
  return () => {
    if (window.Particles) {
      window.Particles.destroy();
    }
  };
}, []);

  return (
    

    <div className="home-container">
        <h1 className='welcome-text'>
            Hello, I'm <span id ='changingFont'> Hija Happy </span> 
        </h1>
        <p> Welcome to my PortFolio</p>
    </div>
    
  );
}; 




export default Home