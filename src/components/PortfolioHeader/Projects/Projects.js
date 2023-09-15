import React from 'react'
import './Projects.css'
import ProjectCards from './ProjectCards'
import GuessTheWord from './Project-images/guesstheword.png'
import GithubRepo from './Project-images/github-repo-gallery.png'
import RandomPw from './Project-images/random-pw.png'
import JoannaGoing from './Project-images/joanna-going-design.png'
import Unplugged from './Project-images/Unplugged.png'
import UnitConverter from './Project-images/metric-unit-converter.png'

function Projects() {
  return (
    <div id="project-cards-container">
      <ProjectCards 
        title= "Joanna Going Design"
        img={JoannaGoing}
        alt="Joanna Going Design"
        description="Portfolio site created for 
        Joanna Going Interior Design; consists 
        of home, about, project (+ 3 sub-project 
        pages) and contact pages to elevate her 
        brand and business."
        skills="JavaScript, HTML, CSS"
        link="https://joannagoingdesign.com/"
      />
      <ProjectCards 
        title= "Guess the Word"
        img={GuessTheWord}
        alt="Guess The Word Game"
        description="Word guessing game; 
          random word pulled through API, 
          translated into dots that represent 
          letters in the word. User guesses letters, 
          with a limit of 8 incorrect guesses."
        skills="JavaScript, HTML, CSS"
        link="https://cgoing2215.github.io/guess-the-word/"
      />
      <ProjectCards 
        title= "GitHub Repo"
        img={GithubRepo}
        alt="GitHub Repo Gallery"
        description="Gallery of github repos.
        Allows user to search for a repo, 
        narrowing results shown. When clicked,
        the repo button will open into a profile
        with a description of the project. 
        Synced to Github profile, automatically
        updates."
        skills="JavaScript, HTML, CSS"
        link="https://cgoing2215.github.io/github-repo-gallery/"
      />
      <ProjectCards 
        title= "Random Password Generator"
        img={RandomPw}
        alt="Random Password Generator"
        description="Allows user to create two 
        random passwords: Looping through an 
        array of 91 characters, 15 random 
        characters are pulled, generating a 
        password. This then populates the 
        interface with two passwords, which
        can be copied to clipboard."
        skills="JavaScript, HTML, CSS"
        link="https://cgoing2215.github.io/random-password-generator/"
      />
      <ProjectCards 
        title= "Unplugged Retreat"
        img={Unplugged}
        alt="Unplugged Retreat Page"
        description="Website for hypothetical 
        corporate camping retreat, includes Home, 
        About and FAQ pages. Mobile-first design, 
        responsive across browser sizes."
        skills="HTML, CSS"
        link="https://cgoing2215.github.io/unplugged-project/"
      />
      <ProjectCards 
        title= "Metric Unit Conversion"
        img={UnitConverter}
        alt="Metric Unit Conversion"
        description="App that takes user input and converts
        the unit between meters & feet (length), liters & 
        gallons (volume), kilograms & pounds (mass)."
        skills="JavaScript, HTML, CSS"
        link="https://cgoing2215.github.io/unit-converter/"
      />

    </div>
  )
}

export default Projects