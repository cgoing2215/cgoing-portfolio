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
        <button id="github-btn">github</button>
      </div>
    </div>
  )
}

export default PortfolioHeader
