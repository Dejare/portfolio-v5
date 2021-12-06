import React, {useRef, useEffect} from 'react'
import '../Main.scss'
import gsap from 'gsap'
import github from '../images/github.svg'
import linkedIn from '../images/linkedin.svg'


const Projectccard = ({stackOne, Stacktwo, Stackthree, Stackfour, ProjectImage, ProjectTitle}) => {


    const hr = useRef(null)
   
    return (
        <div className="projectCard">
            
            <div className="main">
            
                <div className="projectStack">
                    {/* stack */}
                    <p>
                        {stackOne},
                        </p><p>
                        {Stacktwo},</p>
                       <p> {Stackthree},</p>
                        <p>{Stackfour}
                    </p>
                </div>
                <div className="projectImage">
                {/* Image  */}
                <img src={ProjectImage} alt="Project Image"/>
                </div>
                <div className="projectText">
                    {/* Text */}
                    <h1>{ProjectTitle}</h1>

                    <button ><a href="#">VISIT THE WEBSITE <hr ref={hr}/> </a></button>
                    <div className="socialIcons">
                        <img src={github}alt="github" />
                        <img src={linkedIn} alt="linkedin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectccard
