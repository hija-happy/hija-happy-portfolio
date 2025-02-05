import React from 'react'
import "./Hobbies.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Hobbies = () => {
  return (
    <div className='hobbies-section'>
        <h2 className='hobbies-title'> My Hobbies </h2>
        <div className='hobbies-container'> 
             <div className='hobby-item'>
             <i className="fas fa-code hobby-icon"></i>
                <p className='hobby-name'> Coding </p>
             </div>

             <div className='hobby-item'>
             <i className="fas fa-camera hobby-icon"></i>
             <p className='hobby-name'>Photography </p>
             </div>

             <div className='hobby-item'>
             <i className="fas fa-pencil hobby-icon"></i>
             <p className='hobby-name'> Sketching </p>
             </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Hobbies
