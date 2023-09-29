import React from 'react'
import Navigation from './Navigation/Navigation'
import './Header.css'

function Header() {
  return (
    <div id="header-container">
        <Navigation />
        <div id="intro-section">
            <h1>Hello</h1>
            <h2>
                I'm Caroline, I'm a front-end web developer.
            </h2>
            <p>
                I can help you build an app, product or website.
            </p>
        </div>
    </div>
  )
}

export default Header
