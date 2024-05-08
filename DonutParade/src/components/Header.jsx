import React from 'react'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import Cart from '../assets/Cart.png'
import User from '../assets/User.png'
import Bitten from '../assets/bitten.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className='Header'>

      {/* <div id='helloUser' state='false'>
        <img src={Bitten} alt="Donut" id='bitten' />
        <h1>Welcome User</h1>
      </div> */}


        <div className="navbar mx-2 flex justify-between items-center w-auto">
            <a href='/'>
                <img className='bg-red-100' src={DonutParadeLogo} alt="Donut Parade Logo" id='DonutParadeLogo' />
            </a>
            <div className="hidden sm:flex" id='miniNav'>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="/cart"><img src={Cart} alt="Cart" id='Cart' className="w-6 h-6" /></a>
                <a href="/login"><img src={User} alt='User' id='User' className="w-6 h-6" /></a>
            </div>
            <button id="nav-toggle" className="block sm:hidden">
                <svg className="bg-white text-black h-auto w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

    </div>
    
  )
}

export default Header
