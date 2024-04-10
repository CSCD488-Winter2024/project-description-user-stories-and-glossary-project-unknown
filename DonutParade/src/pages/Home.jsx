import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Home.css'

function Home() {
  return (
    <div className="Home">

        <Header />

        <section class="page-content">

          <p>Things will go here</p>
  
          <p id='donut'>🍩</p>

        </section>

        <Footer />


    </div>
  )
}

export default Home