import React from 'react'
import  '../Main.scss'
import arrow from '../images/tri-arrow.png'
const Home = () => {
    return (
        <div className="home">
            <header>
            <div className="header">
    <div class="logo">
      <label>DejareX</label>
    </div>
    <div class="navBar" id="navBar">
      <div id="navOpen">
        <div class="firstLine"></div>
        <div class="middleLine"></div>
        <div class="lastLine" ></div>
    </div>
    </div>
    </div>
  </header>
            <p>FRONT-END DEVELOPER</p>
            <h1>Curating Immersive web experiences with technology</h1>
            <div className="btn">
                <a href="#">About Me</a>
                
                <a href="#">Project  </a>
            </div>
            <div className="homeDecor">
                <img src={arrow}  />
            </div>
              <div className="homeAnimations">
    <div className="triangle"></div>
    <div className="square"></div>
    <div className="bigCircle"></div>
    <div className="bottomleft">
      <div className="smaller"></div>
    </div>
  </div>
        </div>
    )
}

export default Home
