import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Home.css'
import '../Scripts/idk.js'
import '../Scripts/setup.js'


function Home() {
  return (
    <div className="Home">

        <Header />

        <section class="page-content">

          <p>Things will go here</p>
  
          <p id='donut'>🍩</p>

        </section>
        {/* <script src='../Scripts/setup.js'></script> */}

        <script src='idk.js'> </script>

        <Footer />

        



    </div>
  )
}

export default Home
