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
        <div className="hamburger" onClick={showSideBar}>
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div id="sidebar-container" className={sidebar ? "" : "hidden"}>
          <ul id="navigation__list">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div id="navigation-row" className="hidden">
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navigation