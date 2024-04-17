import React from 'react'
import Cart from '../assets/Cart.png'

function Navbar() {
  return (
    <div className='Navbar'>
        
        <ul>
            <li><a href="/menu"><p>Menu</p></a></li>
            <li><a href="/contact"><p>Contact</p></a></li>
            <li><a href="/about"><p>About</p></a></li>
            <li><a href="/cart"><img src={Cart} alt="Cart" id='Cart' /></a></li>
        </ul>

    </div>
  )
}

export default Navbar