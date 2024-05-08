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
                <img src={DonutParadeLogo} alt="Donut Parade Logo" id='DonutParadeLogo' />
            </a>
            <div className="hidden md:flex dropdown" id='miniNav'>
              <ul className='md:flex gap-4 hidden:menu'>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="/cart"><img src={Cart} alt="Cart" id='Cart' className="w-6 h-6" /></a>
                <a href="/login"><img src={User} alt='User' id='User' className="w-6 h-6" /></a>
              </ul>
            </div>
            <details className="md:hidden dropdown mx-6">
              <summary id="nav-toggle" className="m-1 mx-3 btn block md:hidden">
                  <svg className="bg-white text-black h-auto w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-100 rounded-box">
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/cart"><img src={Cart} alt="Cart" id='Cart' className="w-6 h-6 mx-2" /></a></li>
                  <li><a href="/login"><img src={User} alt='User' id='User' className="w-6 h-6 mx-3" /></a></li>
                </ul>
            </details>
            
        </div>

    </div>
    
  )
}

export default Header
