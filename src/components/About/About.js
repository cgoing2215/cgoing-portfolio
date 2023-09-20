import React from 'react'
import './About.css'
import LanguagesProficiencies from './img/lang-prof-mobile.png'

function About() {
  return (
    <div id="about">
      <h3>ABOUT</h3>
      <div id="about-text">
        <p>
          <strong>I'm a front-end web developer based in Brooklyn, NY.</strong>
        </p>
        <p>
          In Spring 2023, I made a career pivot from tech recruiting to web development & UI design, with 
          the intent of building websites and applications that exude sophistication, user-friendliness, and
          modern design.
        </p>
        <p>
          Within two months, I completed the <a href="https://skillcrush.com/">SkillCrush</a> Break-Into-Tech bootcamp, 
          learning FE languages alongside fundamental web design principles. I built out numerous <a href="#portfolio-section-container">projects</a>, sites and 
          applications that allow for varied user experiences, and crafted designs that could appeal to broad audiences. 
        </p>
        <p>
          My tech recruiting background ingrained a deep-rooted commitment to empathic user-focused design, helping me to
          think more strategically about what motivates a candidate and how to inspire them to action. My hope is to take
          this approach with me into my web development career, and bring a new perspective to a technical team.
        </p>
        <p>
          Outside of coding, you can find me listening to podcasts in Prospect Park, wandering new neighborhoods throughout NYC,
          or sitting in a favorite coffee shop, finding the latest trends in web dev and UI design. 
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