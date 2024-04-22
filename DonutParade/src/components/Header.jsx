import React from 'react'
import Navbar from './Navbar'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className='Header'>
      
        
        <a href='/'><img src={DonutParadeLogo} alt="Donut Parade Logo" id='DonutParadeLogo' /></a>
        <Navbar />
        
      
    </div>
  )
}

export default Header