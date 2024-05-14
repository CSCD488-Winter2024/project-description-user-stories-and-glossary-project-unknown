import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { CartContext } from '../components/CartContext'

let num = 0;
let price = 0.00;

const option1 = document.querySelector('#cartContent');


function Cart() {

  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (name) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { name } });
  };

  
  

  

  return (
    <div className='Cart'>


      <Header />
      
      

      <section id='cartContent'>

        <h2>Cart</h2>

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
        


      </section>

      
      <Footer />
      


    </div>
  )
}

export default Cart