import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { CartContext } from '../components/CartContext'

let num = 0;
let price = 0.00;
// const {cart } = useContext(CartContext);
// const cartContent = document.querySelector('.cartContent');
// const yeah = "yeah";
// cartContent.innerHTML('beforeBegin', `<p>${yeah}</p>`);
function Cart() {

  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (name) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { name } });
  };

  
  

  

  return (
    <div className='Cart'>


      <Header />
      
      

      <section class='cartContent'>

        <h1>Cart</h1>

        <br />

        <ul>
          {state.items.map((item) => (
            <li key={item.name}>
               {item.name} x {item.quantity} {/*x {item.price} */}
              <button onClick={() => handleRemoveFromCart(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total items: {state.itemCount}</p>
        {/* <p>Total price: {state.total.toFixed(2)}</p> */}
        
        {/* <div id='option1'>

          <h3>Donut 1</h3>
          <p>Price: ${price}</p>
          <p>Quantity: {num}</p>
          <button id='addDonut'>Add</button>
          <button id='removeDonut'>Remove</button>

        </div>

        <br />

        <div id='option2'>

          <h3>Donut 2</h3>
          <p>Price: ${price}</p>
          <p>Quantity: {num}</p>
          <button id='addDonut'>Add</button>
          <button id='removeDonut'>Remove</button>

        </div> */}

      </section>

      
      <Footer />
      


    </div>
  )
}

export default Cart