import React from 'react'
import "../Main.scss"
import github from '../images/github.svg'
import linkedIn from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import arrow from '../images/basic-gem.png'
const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="whole">
  <div className="contactHeading">
    <h1>Contact - </h1>
  </div>
  <div className="contactText">
    <p>
      I'm currently open to gigs and FrontEnd Dev Roles.
      <br />
      Text me about your project and how I can help. <br /> OR Just say HI
      <br />
      Follow this magic links to talk to me.
    </p>
  </div>
  <div className="contactImg">
    <a
      href="https://www.linkedin.com/mwlite/in/dejare-daniels-0758741b3/"
      target="_blank"
    >
      <img src={linkedIn} alt="linkedin" />
    </a>
    <a href="https://github.com/dejare" target="_blank">
      <img src={github} alt="github" />
    </a>
    <a href="https://www.twitter.com/Therealnicron?s=09/" target="_blank">
      {" "}
      <img src={twitter} alt="twitter" />
    </a>
  </div>
  </div>
  <div className="contactWholeImg">
      <img src={arrow} alt="contactDecor" />
  </div>
</div>

        </div>
    )
}

export default Contact
