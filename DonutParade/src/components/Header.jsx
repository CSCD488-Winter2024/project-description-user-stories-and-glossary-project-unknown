import React from 'react'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import Cart from '../assets/Cart.png'
import User from '../assets/User.png'
import Bitten from '../assets/bitten.png'
import '../styles/Header.css'


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function Header() {
  return (
    <div className='Header'>

    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    

      {/* <div id='helloUser' state='false'>
        <img src={Bitten} alt="Donut" id='bitten' />
        <h1>Welcome User</h1>
      </div> */}

      

      {/* <div class='topnav' id ='Navbar'>
        <a href='/'><img src={DonutParadeLogo} class='active' alt="Donut Parade Logo" id='DonutParadeLogo' /></a>
        <a href="/menu"><p>Menu</p></a>
        <a href="/contact"><p>Contact</p></a>
        <a href="/about"><p>About</p></a>
        <a href="/cart"><img src={Cart} alt="Cart" id='Cart' /></a>
        <a href="/login"><img src={User} alt='User' id='User'></img></a>
        <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </a>
      </div> */}

      {/* <div class="topnav" id="myTopnav">
        <a href='/'><img src={DonutParadeLogo} class='active' alt="Donut Parade Logo" id='DonutParadeLogo' /></a>
        <div id='Navbar'>
          <a href="/menu"><p>Menu</p></a>
          <a href="/contact"><p>Contact</p></a>
          <a href="/about"><p>About</p></a>
          <a href="/cart"><img src={Cart} alt="Cart" id='Cart' /></a>
          <a href="/login"><img src={User} alt='User' id='User'></img></a>
          <a href="javascript:void(0);" class="icon" onClick={myFunction}>
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>  */}

        <div className="navbar bg-base-100">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>

    </div>

    
    
  )
}


export default Header
