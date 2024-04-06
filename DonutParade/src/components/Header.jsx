import React from 'react'
import Navbar from './Navbar'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className='Header'>
      
      <header>
        <img src={DonutParadeLogo} alt="Donut Parade Logo" />
        <Navbar />

      </header>
      
    </div>
  )
}

export default Header