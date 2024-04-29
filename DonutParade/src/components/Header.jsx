import React from 'react'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import Cart from '../assets/Cart.png'
import User from '../assets/User.png'
import '../styles/Header.css'

function Header() {
  return (

    <div className='Header'>
      <a href='/'><img src={DonutParadeLogo} alt="Donut Parade Logo" id='DonutParadeLogo' /></a>

      <div id ='Navbar'>
        <ul>
          <li><a href="/menu"><p>Menu</p></a></li>
          <li><a href="/contact"><p>Contact</p></a></li>
          <li><a href="/about"><p>About</p></a></li>
          <li><a href="/cart"><img src={Cart} alt="Cart" id='Cart' /></a></li>
          <li><a href="/login"><img src={User} alt='User' id='User'></img></a></li>
        </ul>
      </div>

    </div>
    
  )
}

export default Header
