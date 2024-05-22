import { getDatabase, ref, onValue, get, update,child } from "firebase/database";
import { initializeApp } from "firebase/app";
import {auth, firebaseApp} from "./FBconfig.js";
import { CartContext } from "../components/CartContext.jsx";
import { useContext } from "react";

// // const firebaseConfig = {
// //     databaseURL: "https://donutparade-420a9-default-rtdb.firebaseio.com/",
// //   };

// // const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase(firebaseApp));
const {dispatch} = useContext(CartContext);
const handleAddToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: product, quantity },
    });
  };

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
        //console.log("Add to cart button clicked");
        handleAddToCart(data[key]);
      });
      counter++;
    }
};
// //   menuRow.className = "menu-row";
// //   menuContainer.appendChild(menuRow);
// //   for (const key in data) {
// //     const menuBox = document.createElement("div");
// //     menuBox.className = "menu-box";
// //     menuRow.appendChild(menuBox);
// //     menuBox.innerHTML = template;
// //     menuBox.querySelector("h3").textContent = data[key].name;
// //     menuBox.querySelector("p").textContent = data[key].desc;
// //     //menuBox.querySelector("img").src = data[key].image;
// //     // what about the price and stock, Lois?
// //     menuBox.querySelector(".add-to-cart-button").addEventListener("click", () => {
// //       console.log("Add to cart button clicked");
// //     });
// //   }

const template = `
              <div class="img-container">
                <img class="menu-box-img" src="" alt="Donut Image" />
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