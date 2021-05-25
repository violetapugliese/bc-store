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

    return {
        addToCart,
        removeFromCart,
        state,
    };

};

export default useInitialState;
