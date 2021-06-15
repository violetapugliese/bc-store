import { useState } from 'react';
import initialState from '../initialState';


const useInitialState = () => {
    const [state, setState] =useState(initialState);

    // Logica de add to cart
    const addToCart = payload => {
        setState({
            ...state,
            cart : [...state.cart, payload],
        });
    }
    //Remove from Cart
    const removeFromCart = (payload, indexToRemove) => {
        setState({
          ...state,
          cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
        });
      };

      // submit del formulario. Toma los datos ingresados en input y los lleva al array de "buyer" en initialState 
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload],
        });
        console.log(state.buyer, payload);
    }
    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        state,
    };

};

export default useInitialState;
