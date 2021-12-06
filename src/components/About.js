import React from 'react'
import aboutImg from '../images/aboutImg.webp'
const About = () => {
    return (
        <div>
    <div className="about">
  <div className="aboutHeading">
    <h1>About -</h1>
  </div>
  <div className="aboutImg">
    <img src= {aboutImg}alt="DejareImg" />
  </div>
  <div className="aboutText">
    <p>Hey, I'm Dejare Daniels. I am a self-taught Front-end Developer and school taught computer engineer. I'm currently a student of the Federal University Of Technology, Akure. I took an interest in bringing beautiful designs to pixel-perfect builds since i was in high school. I'm proficient in Basic Web Devlopment Technologies like
    </p>
    <li>HTML5</li>
    <li>CSS (BOOTSTRAP, TAILWIND, SASS, SCSS)</li>
    <li>JAVASCRIPT (Jquery, Three.js, React)</li>
    <li>Animation Technologies like Locomotive Scroll, GSAP.</li>
    <p />
    <p>
      I'm currently learning REACT and I'm open to entry-level jobs or gigs and
      Internship programs
    </p>
    <a href="#"> Contact Me </a>
  </div>
</div>

        </div>
    )
}

export default About
