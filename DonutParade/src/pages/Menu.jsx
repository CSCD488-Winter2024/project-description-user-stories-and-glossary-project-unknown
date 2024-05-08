import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Menu.css'
//import '../scripts/Menu.js'
import { getDatabase, ref, onValue, get, update,child } from "firebase/database";
import {auth, firebaseApp} from "../scripts/FBconfig.js";
import { CartContext } from "../components/CartContext.jsx";




function Menu() {

  const {dispatch} = useContext(CartContext);
  const handleAddToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: product, quantity },
    });
  };
  
  const dbRef = ref(getDatabase(firebaseApp));
const writeToPage = (data) => {
  const menuContainer = document.querySelector(".menu-grid");
  //add in menu-rows, but every three menu-boxes, add a new row
    let counter = 0;
    let menuRow;
    for (const key in data) {
      if (counter % 3 === 0) {
        menuRow = document.createElement("div");
        menuRow.className = "menu-row";
        menuContainer.appendChild(menuRow);
      }
      const menuBox = document.createElement("div");
      menuBox.className = "menu-box";
      menuRow.appendChild(menuBox);
      menuBox.innerHTML = template;
      menuBox.querySelector("h3").textContent = data[key].name;
      menuBox.querySelector("p").textContent = data[key].desc;
      menuBox.querySelector("img").src = data[key].image;
      // what about the price and stock, Lois?
      menuBox.querySelector(".add-to-cart-button").addEventListener("click", () => {
        console.log("Add to cart button clicked");
        console.log(data[key]);
        handleAddToCart(data[key]);
      });
      counter++;
    }
};

const template = `
<div class="img-container">
  <img class="menu-box-img" src="https://placehold.co/100x100?text=Yo" alt="Donut Image" />
</div>
<h3></h3>
<p></p>
<button class="add-to-cart-button">Add to Cart</button>`;

onValue(dbRef, (snapshot) => {
  if (snapshot.exists()) {
    var data = snapshot.child("Donuts").val();
    //console.log(data);
    writeToPage(data);
    
  } else {
    console.log("No data available");
  }
});

  






  return (
  <div class="menu">

    <Header />
      

      <section class="page-content">

        <h1 class="page-title-header">Our Menu</h1>
        <p>Paragraph goes here</p>

        <div class="menu-grid">


          {
            
            
          }

          {/* <div class="menu-row">

            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
          </div>

          <div class="menu-row">

            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
          </div>

          <div class="menu-row">

            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
            <div class="menu-box">
              <div class="img-container">
                <img class="menu-box-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=3f2a740c71687c68c0e39ffb3812eed2dcfeea593db6af9736b4b621827f903b&ipo=images" alt="Donut Image" />
              </div>
              <h3>Chocolate Bar</h3>
              <p>We can retrieve desc and image from database?</p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
          </div> */}

        </div>
      </section>

      <Footer />


    </div>
  )
}

export default Menu