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
          In Spring 2023, I made a career pivot from tech recruiting to web development 
          & UI design, inspired to build beautiful, dynamic and intuitive
          websites and applications.  
        </p>
        <p>
          Within two months I completed the <a href="https://skillcrush.com/">SkillCrush</a> Break-Into-Tech bootcamp, 
          learning FE languages, alongside fundamental web design principles.
        </p>
        <p>
          From tech recruiting, my focus has been on empathic user-focused design, thinking strategically about 
          what motivates a candidate and how to inspire them to take action. As an avid reader and a former 
          English major, I have keen eye for style and voice, and find their use in brand design and psychology 
          truly fascinating.
        </p>
        <p>
          When I'm not coding, you can find me reading in Prospect Park, exploring art installations and museums in Manhattan
          or browsing the web from a coffee shop to find what's cutting edge in UI design and web development. 
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