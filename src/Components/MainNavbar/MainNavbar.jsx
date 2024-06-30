import React from 'react'
import './MainNavbar.css'
import betterhelplogo from '../../betterhelplogo.png'
function MainNavbar() {
  return (
    <div className='container'>
      <img className='mainNavbar-img' src={betterhelplogo} alt='navbar-logo'/>
      <div className="nav-section">
        <a className='nav-pages' href='/'>About</a>
        <a className='nav-pages' href='/'>Reviews</a>
        <a className='nav-pages' href='/'>Therapist's Job</a>
        <a className='nav-pages' href='/'>Contact us</a>
      </div>
      <button className='navbar-loginButton'>LOGIN</button>
      <button className='navbar-loginButton2'>GET STARTED</button>
    </div>
  )
}

export default MainNavbar
