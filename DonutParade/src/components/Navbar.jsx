import React from 'react'
import Cart from '../assets/Cart.png'
import User from '../assets/User.png'

function Navbar() {
  return (
    <div className='Navbar'>
        
        <ul>
            <li><a href="/menu"><p>Menu</p></a></li>
            <li><a href="/contact"><p>Contact</p></a></li>
            <li><a href="/about"><p>About</p></a></li>
            <li><a href="/cart"><img src={Cart} alt="Cart" id='Cart' /></a></li>
            <li><a href="/user"><img src={User} alt='User' id='User'></img></a></li>
        </ul>

    </div>
  )
}

export default Navbar