import React from 'react'
import DonutParadeLogoWhite from '../assets/DonutParadeLogoWhite.png'
import InstagramLogo from '../assets/Instagram.png'
import FacebookLogo from '../assets/Facebook.png'
import '../styles/Footer.css'


function Footer() {
  return (
    <div className="Footer">

    <div id="left-footer">
        <h1>Location</h1>
        <p id="location-info"> 2152 N Hamilton St, <br />Spokane, WA 99207</p>
        <h1>Contact</h1>
        <p>donutparadespokane@gmail.com <br />(509) 473-9870</p>
    </div>

    <div id="middle-footer">
        <a href="/">
            <img src={DonutParadeLogoWhite} alt="DonutParade" />
        </a>

        <div id="social-media">
            <a href="https://www.facebook.com/donutparadespokane/">
                <img src={FacebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/donutparade.spokane/">
                <img src={InstagramLogo} alt="Instagram" />
            </a>
        </div>

    </div>

    <div id="right-footer">
        <h1>Navigate</h1>
        <p><a href="/menu">Menu</a></p>
        <p><a href="/contact">Contact</a></p>
        <p><a href="/cart">Cart</a></p>
        <p><a href="/profile">Profile</a></p>
    </div>

</div>

  )
}

export default Footer