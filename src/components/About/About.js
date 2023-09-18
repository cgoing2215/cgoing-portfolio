import React from 'react'
import './About.css'
import LanguagesProficiencies from './img/lang-prof-mobile.png'

function About() {
  return (
    <div id="about-section-container">
      <h3>ABOUT</h3>
      <div id="about-text">
        <p>
          <strong>I'm a front-end web developer based in Brooklyn, NY.</strong>
        </p>
        <p>
          In Spring 2023, I made a career pivot from tech recruiting to web development & UI design, with 
          the intent of building websites and applications with engaging designs that exude sophistication, 
          interactivity, and user-friendliness.
        </p>
        <p>
          Within two months of my pivot, I completed the <a href="https://skillcrush.com/">SkillCrush</a> Break-Into-Tech bootcamp, 
          learning FE languages alongside fundamental web design principles, all while building out numerous <a href="#portfolio-section-container">projects</a>, sites and 
          applications that allow for varied user experiences. 
        </p>
        <p>
          My tech recruiting background ingrained a deep-rooted commitment to empathic user-focused design, 
          thinking strategically about what motivates a candidate and how to inspire them to action. 
          Now, my mission is to incorporate this approach into web development and UI design, continually seeking new ways 
          to captivate and inspire users.
        </p>
        <p>
          Outside of coding, you can find me reading a book or magazine in Prospect Park, taking on a new skill like creative writing or the harmonica --
          or just sitting in a favorite coffee shop, hunting for the latest trends in web dev and UI design. 
        </p>
        <div id="lang-proficiencies">
          <img src={LanguagesProficiencies} alt="Languages and Proficiences"/>
          <a href="https://docs.google.com/document/d/1BVo_wXaxB6FPguerlDcMcNPewvYaD4IlOHLR6k8eAwE/edit" target="_blank" rel="noopener noreferrer"><button id="resume-btn">view resume</button></a>
        </div>
      </div>
    </div>
  )
}

export default About