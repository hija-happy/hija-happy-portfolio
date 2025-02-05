import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="book-container">
      <div className={`book ${isOpen ? 'open' : ''}`} onClick={handleBookClick}>
        <div className="cover front-cover">
          <h1>About Me</h1>
        </div>
        <div className="page page-1">
          <p>I design. I code. I create magic. ✨</p>
        </div>
        <div className="page page-2">
          <p>Turning ideas into reality is my superpower. 🚀</p>
          <div className="object rocket"></div>
        </div>
        <div className="page page-3">
          <p>I love building things that are functional and beautiful.</p>
        </div>
        <div className="page page-4">
          <p>When I’m not working, I sketch, snap photos, and explore. 🌍📸</p>
        </div>
        <div className="page page-5">
          <p>Let’s make something extraordinary together!</p>
        </div>
        <div className="cover back-cover"></div>
      </div>
    </div>
  );
};

export default Book;