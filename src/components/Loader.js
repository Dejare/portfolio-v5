import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
const Loader = () => {
    const mainLoader = useRef(null)
    const display = useRef()
    useEffect(()=> {
        setTimeout(() => {
            gsap.fromTo( mainLoader.current, {
                width: 100
            }, {
                width: 0,
                display: "none"
            }) 
        }, 4000);
       
    }, [])
    useEffect(()=> {
        setTimeout(() => {
            gsap.fromTo( display.current, {
                width: 100
            }, {
                width: 0,
                display: "none"
            }) 
        }, 5000);
       
    }, [])
    return (

        <div className="loader" ref={display}>
             <div ref={mainLoader} class="mainloader">
      <div class="bgone">
        <div class="bgtwo">
          <div class="bgthree">
          </div>
        </div>
      </div>

    </div>
        </div>
    )
}

export default Loader
