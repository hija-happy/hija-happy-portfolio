import React from 'react'
import "./Navbar.css";
import "../var.css";
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">Hija Happy</div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    </nav>
  )
}

export default Navbar