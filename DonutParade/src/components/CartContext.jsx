// CartContext.js
import React, { createContext, useReducer, useEffect } from 'react';

// Define the context
const CartContext = createContext();

// const initialCartState = {
//     items: [],
//     //total: 0,
//     itemCount: 0,
//   };

// Define initial state with loading from localStorage
const loadInitialCartState = () => {
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : { items: [], /*total: 0,*/ itemCount: 0 };
  };

// Define reducer functions for updating the cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);

      let newItems;
      if (existingItem) {
        // If item exists, update quantity
        newItems = state.items.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        // If item does not exist, add it to the cart
        newItems = [...state.items, { ...item, quantity }];
      }

    //   const newTotal = newItems.reduce(
    //     (total, i) => total + i.price * i.quantity,
    //     0
    //   );
      const newItemCount = newItems.reduce(
        (count, i) => count + i.quantity,
        0
      );

      return {
        ...state,
        items: newItems,
        //total: newTotal,
        itemCount: newItemCount,
      };

    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter(
        (i) => i.name !== action.payload.name
      );

    //   const updatedTotal = updatedItems.reduce(
    //     (total, i) => total + i.price * i.quantity,
    //     0
    //   );
      const updatedItemCount = updatedItems.reduce(
        (count, i) => count + i.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        //total: updatedTotal,
        itemCount: updatedItemCount,
      };

    case 'CLEAR_CART':
      return {
        items: [],
        //total: 0,
        itemCount: 0,
      };

    default:
      return state;
  }
};

// Create provider component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, loadInitialCartState());

  // Save the state to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
