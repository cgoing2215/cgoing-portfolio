import React from 'react'
import './Projects.css'
import ProjectCards from './ProjectCards'
import GuessTheWord from './Project-images/guesstheword.png'
import GithubRepo from './Project-images/github-repo-gallery.png'
import StickyNotes from './Project-images/stickynotes-app.png'
import JoannaGoing from './Project-images/joanna-going-design.png'
import Unplugged from './Project-images/Unplugged.png'
import NameTag from './Project-images/nametag-generator.png'

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
        skills="HTML, CSS, JavaScript"
        link="https://joannagoingdesign.com/"
      />
      <ProjectCards 
        title= "Sticky Notes App"
        img={StickyNotes}
        alt="Sticky Notes App"
        description="Interactive app that lets users create, 
        edit, search through and delete “sticky notes, to 
        help keep track of to-do's. Made using ES6 and JSX. 
        App operates on lifecycle methods, manages data flow, 
        and manipulates the DOM."
        skills="HTML, CSS, JavaScript, React"
        link="https://sticky-note-app-kappa.vercel.app/"
      />
      <ProjectCards 
        title= "Name Tag Generator"
        img={NameTag}
        alt="Name Tag Generator"
        description="Allows user to generate name tags. User
         can create name tags in bulk using functional components
         and ES6 modules. Built using HTML, CSS, JavaScript, React."
        skills="HTML, CSS, JavaScript, React"
        link="https://nametag-generator.vercel.app/"
      />
      <ProjectCards 
        title= "GitHub Repo Gallery"
        img={GithubRepo}
        alt="GitHub Repo Gallery"
        description="Gallery of GitHub repos.
        Allows user to search for a repo, 
        narrowing results shown. When clicked,
        the repo button will open into a profile
        with a description of the project. 
        Synced to GitHub profile, automatically
        updates."
        skills="HTML, CSS, JavaScript"
        link="https://cgoing2215.github.io/github-repo-gallery/"
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
        skills="HTML, CSS, JavaScript"
        link="https://cgoing2215.github.io/guess-the-word/"
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
    </div>
  )
}

export default Projects