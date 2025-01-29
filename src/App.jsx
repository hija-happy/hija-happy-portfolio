import React from "react";
import Home from "./pages/Home";
import styles from './App.module.css'
import About from "./pages/About";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
      <Navbar/>
      <div className="app-container">
        <Home />
        <About />
        <Experience />
      </div>
    </>
  )
}

export default App
