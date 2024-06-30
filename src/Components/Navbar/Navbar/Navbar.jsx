import React from 'react'
import betterhelplogo from '../../../betterhelplogo.png'
import './Navbar.css'
function navbar() {
  return (
    <div className='container'>
      <img className='navbar-img' src={betterhelplogo} alt='Navbar-logo'/>
      <button className='navbar-loginButton'>LOGIN</button>
    </div>
  )
}

export default navbar
