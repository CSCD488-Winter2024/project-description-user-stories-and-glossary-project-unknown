import React from 'react'


function Navbar() {
  return (
    <div className='Navbar'>
        
        <ul>
            <li><a href="/"><p>Home</p></a></li>
            <li><a href="/menu"><p>Menu</p></a></li>
            <li><a href="/order"><p>Order</p></a></li>
            <li><a href="/contact"><p>Contact</p></a></li>
            <li><a href="/about"><p>About</p></a></li>
        </ul>

    </div>
  )
}

export default Navbar