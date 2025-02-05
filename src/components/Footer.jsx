import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className='footer'> 
        <p className="rights">© 2025 Hija Happy. All Rights Reserved.</p>

        <div className='social-icons'>
        <a href="https://github.com/hija-happy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/hija_happy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:hijahappy2004@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/hija-happy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      
    </footer>
  )
}

export default Footer