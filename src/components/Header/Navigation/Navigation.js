import React, { useState } from 'react'
import './Navigation.css'
import Logo from '../img/CG logo.png'


function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div id="navigation-container">
      <div className="navigation">
        <div id="top-header-line">
          <a href="/">
            <img src={Logo} alt="Caroline Going Logo" />
            <h4>Caroline Going</h4>
          </a>
        </div>
        <div className="hamburger">
          <label htmlFor="check" onClick={showSideBar}>
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div id="sidebar-container" className={sidebar ? "show" : "hidden"}>
          <ul id="navigation__list">
            <li><a href="#about-section-container">About</a></li>
            <li><a href="#portfolio-section-container">Portfolio</a></li>
            <li><a href="#contact-container">Contact</a></li>
          </ul>
        </div>
        <div id="navigation-row" className="hidden">
          <nav>
            <ul>
              <li><a href="#about-section-container">About</a></li>
              <li><a href="#portfolio-section-container">Portfolio</a></li>
              <li><a href="#contact-container">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navigation