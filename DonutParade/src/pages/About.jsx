import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBack from '../assets/aboutbackground.png';
import '../styles/About.css';



function About() {
  return (
    <div className="About">

      <Header />

      <div id="About-content">

        <h2>About Us</h2>
        <h3>Under New Management Since 2019!</h3>
        <img src={AboutBack} alt="About Image"/>
        <h1>Hello There!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque incidunt laborum excepturi odit? Enim asperiores dolore, iusto esse nihil consequatur minus animi nam corporis recusandae molestiae, consectetur officia, dicta ullam accusantium! Illo eaque, harum quod obcaecati laborum placeat perferendis sint praesentium aspernatur ex possimus atque mollitia alias velit quia, error sunt dolores nesciunt soluta qui? Deleniti, minima. Tempora at earum voluptates facere quasi cumque consectetur ratione veritatis tenetur commodi voluptas est expedita similique, dolor soluta, omnis quas vitae id corrupti obcaecati fuga iusto sunt sed. Eligendi, libero, atque veritatis quidem fugit iure deleniti explicabo dolorum, amet laboriosam tenetur eveniet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque incidunt laborum excepturi odit? Enim asperiores dolore, iusto esse nihil consequatur minus animi nam corporis recusandae molestiae, consectetur officia, dicta ullam accusantium! Illo eaque, harum quod obcaecati laborum placeat perferendis sint praesentium aspernatur ex possimus atque mollitia alias velit quia, error sunt dolores nesciunt soluta qui? Deleniti, minima. Tempora at earum voluptates facere quasi cumque consectetur ratione veritatis tenetur commodi voluptas est expedita similique, dolor soluta, omnis quas vitae id corrupti obcaecati fuga iusto sunt sed. Eligendi, libero, atque veritatis quidem fugit iure deleniti explicabo dolorum, amet laboriosam tenetur eveniet.</p>
       

      </div>

      <Footer />

    </div>

  )

}

export default About