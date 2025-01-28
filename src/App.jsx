import React from "react";
import Home from "./pages/Home";
import styles from './App.module.css'
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {

  return (
    <div className="app-container">
    <Home />
    <About />
    <Experience />
  </div>
  )
}

export default App
