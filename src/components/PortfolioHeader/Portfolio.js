import React from 'react'
import './Portfolio.css'
import Projects from './Projects/Projects'

function PortfolioHeader() {
  return (
    <div id="portfolio">
      <h3>PORTFOLIO</h3>
      <div id="project-section">
        <Projects />
      </div>
      <div id="button-section">
        <a href="https://github.com/cgoing2215" target="_blank" rel="noopener noreferrer"><button id="github-btn">github</button></a>
      </div>
    </div>
  )
}

export default PortfolioHeader
