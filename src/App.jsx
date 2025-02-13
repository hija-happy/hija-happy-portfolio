import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Hobbies from "./pages/Hobbies";
import Home from "./pages/Home";


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
