import React, {useState, useEffect} from 'react'
import './App.scss'
import Project from './components/Project'
import About from './components/About'
import Home from './components/Home'
import Loader from './components/Loader'
import Contact from './components/Contact'
const App = () => { 
  const [Load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      <Loader />
      setLoad(true)
    }, 5000);
  }, [])
  return (    

  <div>
    <Loader/>
     <Home />
     <Project/>
     <About />
     <Contact/>
  </div>

)
}

export default App
