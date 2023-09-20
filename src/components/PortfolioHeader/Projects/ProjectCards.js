import React from 'react'
import './Projects.css'

function ProjectCards(props) {
  return (
    <div id="project-card">
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.alt}/>
        <div id="skills-tools-container">
            <div id="skills">
                <p>{props.skills}</p>
            </div>
        </div>
        <p id="project-description">
            {props.description}
        </p>
        <a href={props.link} target="_blank" rel="noopener noreferrer"><button>live page</button></a>
    </div>
  )
}

export default ProjectCards