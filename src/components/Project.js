import React from 'react'
import Projectccard from './Projectccard'
import joker from '../images/joker.jpg'
import numberOne from '../images/01.svg'
import '../Main.scss'
const Project = () => {
    return (
        <div>
  <div className="projectHeading">
    <h1>
      My - <br /> Project
    </h1>
  </div>
  <div className="projectText">
    <p>
      People Work Hard, Some Work Smart. <br />
      But Here I Am, Doing Both.
      <br/>
      Here are some Projects I've worked on- </p>
  </div>


             <Projectccard
      stackOne="React"
      Stackthree="GSAP"
      Stacktwo="SCSS"
      Stackfour="Netlify"
      ProjectImage={joker}
      ProjectTitle="Dejare-X Version 1"
      projectNumber={numberOne}
      />

<Projectccard
      stackOne="HTML"
      Stackthree="JAVASCRIPT"
      Stacktwo="SCSS"
      Stackfour="API'S"
      ProjectImage={joker}
      ProjectTitle="Weather App"
      projectNumber={numberOne}
      />
        </div>
    )
}

export default Project
