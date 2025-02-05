import React from 'react'
import projectsData from "../assets/jsons/projectsData.json";
const Projects = () => {
  return (
    
    <section className = "projects-section">
        <h1> Projects</h1>
        <div className='projects-container'>
            {projectsData.map((item, index) => (
                 <div key ={index} className='project-card'>
                    <img src={project.image} className='project-image'/>
                 <div className='project-info'>
                     <h3> {item.title}</h3>
                     <p>{item.description} </p>
                 </div>
             </div>
            ))}
           
        </div>
    </section>
  )
}

export default Projects