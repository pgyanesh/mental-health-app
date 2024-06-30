import React from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar/Navbar'
function Home() {
  return (
    <>
      <Navbar/>
      <div className="home-container">
        <div className="home-fixedHeading">
            <h2>Convenient and affordable therapy with <span className='headingSpan'>BetterHelp</span>.</h2>
        </div>
        <div className="home-options">
            <h3 className='home-optionHead'>Help us match you to the right therapist</h3>
            <h3></h3>
        </div>
      </div>
    </>
  )
}

export default Home
