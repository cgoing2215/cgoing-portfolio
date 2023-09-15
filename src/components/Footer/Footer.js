import React from 'react'
import LinkedIn from './img/linkedin.png'
import GitHub from './img/github.png'
import Medium from './img/medium.png'
import './Footer.css'

function Footer() {
  return (
    <div id="footer-container">
        <div id="contact">
            <h3>Contact</h3>
            <a href="mailto:hi@carolinegoing.com">hi@carolinegoing.com</a>
            <p>847.840.3384</p>
        </div>
        <div id="social">
            <h3>Social</h3>
            <div id="logos">
                <a href="https://www.linkedin.com/in/caroline-going-a2b4ab122/"><img src={LinkedIn} alt="LinkedIn Logo"/></a>
                <a href="https://github.com/cgoing2215"><img src={GitHub} alt="GitHub Logo"/></a>
                <a href="https://medium.com/@carolinegoing2"><img src={Medium} alt="Medium Logo"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer