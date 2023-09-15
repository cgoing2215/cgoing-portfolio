import React, { useState } from 'react'
import './Navigation.css'
import Logo from '../img/CG logo.png'


function Navigation() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
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
        <div className="hamburger" onClick={toggleNavMenu}>
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div id="navigation-row" className={isNavMenuOpen ? "" : "hidden"}>
          <nav>
            <ul>
              <li><a href="#about-section-container">About</a></li>
              <li><a href="#portfolio-section-container">Portfolio</a></li>
              <li><a href="#contact-container">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="navSideMenu-container" className={isNavMenuOpen ? "" : "hidden"}>
        <div id="navigation__background">&nbsp;</div>
        <ul id="navigation__list">
          <li><a href="#about-section-container">About</a></li>
          <li><a href="#portfolio-section-container">Portfolio</a></li>
          <li><a href="#contact-container">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation