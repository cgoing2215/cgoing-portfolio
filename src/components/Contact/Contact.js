import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id="contact-container">
      <h3>CONTACT</h3>
      <div id="contact-call-to-action">
        <div id="get-in-touch-line">
          <h5>Let's <span id="turquoise">connect</span>.</h5>
        </div>
        <a href="mailto:hi@carolinegoing.com"><button>email</button></a>
      </div>
    </div>
  )
}

export default Contact