import React from 'react';
import './ProjectComponent.css';

const Project = ({ title, imageUrl, description, projectLink }) => {

    const handleError = (e) => {
        e.target.src = 'src/assets/react.svg'; // Set your placeholder image path here
    };

    return (
        <div className="card" style={{ width: '18rem', position: 'relative', overflow: 'hidden' }}>
          <img 
                src={imageUrl} 
                className="card-img-top" 
                alt={title} 
                onError={handleError} // Handle the error event
            />
          <div className="card-body overlay">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-between">
              <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      );
    };
    

export default Project;