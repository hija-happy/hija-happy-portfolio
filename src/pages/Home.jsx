import React, { useEffect } from 'react'
import "./Home.css";

const Home = () => {

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