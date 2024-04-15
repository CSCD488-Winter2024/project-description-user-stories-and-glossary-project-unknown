import React from 'react'
import DonutParadeLogoWhite from '../assets/DonutParadeLogoWhite.png'
import InstagramLogo from '../assets/Instagram.png'
import FacebookLogo from '../assets/Facebook.png'
import '../styles/Footer.css'


function Footer() {
  return (
    <div class="Footer">

    <div class="left-footer">
        <h1>Location</h1>
        <p>2152 N Hamilton St, <br />Spokane, WA 99207</p>
        <h1>Contact</h1>
        <p>(509) 473-9870, <br />donutparadespokane@gmail.com</p>
    </div>

    <div class="middle-footer">
        <img src={DonutParadeLogoWhite} alt="DonutParade" />
        <div class="social-media">
            <img src={FacebookLogo} alt="Facebook" />
            <img src={InstagramLogo} alt="Instagram" />
        </div>
    </div>

    <div class="right-footer">
        <h1>Navigate</h1>
        <p><a href="#">Menu</a></p>
        <p><a href="#">Contact</a></p>
        <p><a href="#">Cart</a></p>
        <p><a href="#">Profile</a></p>
    </div>

</div>

  )
}

export default Footer