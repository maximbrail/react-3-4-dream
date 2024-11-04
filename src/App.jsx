import React from 'react'
import './App.css'
import Hero from './Hero/Hero'
import About from './About/About'
import Final from './Final/Final'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div className='body'>
      <div className="hero">
      <Hero/>
      </div>

      <div className="about">
        <About/>
      </div>

      <div className="final">
        <Final/>
      </div>

      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  )
}

export default App

