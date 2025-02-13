import React from "react";
import Home from "./pages/Home";
import styles from './App.module.css'
import About from "./pages/About";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Hobbies from "./pages/Hobbies";
import Footer from "./components/Footer";
import Projects from "./pages/Project";

function App() {

  return (
    <>
      <Navbar/>
      <div className="app-container">
        <Home />
        <About />
        <Experience />
        {/* <Projects/> */}
        <Hobbies/>
      </div>
      <Footer/>
    </>
  )
}

export default App
