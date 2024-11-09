import { ADD_TO_CART, UPDATE_CART } from '../actions/cartAction';
import { saveCartToLocalStorage, getCartFromLocalStorage } from '../utils/localStorage';

const initialState = {
  cartItems: getCartFromLocalStorage() || [], // Initialize with data from localStorage if available
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existItem) {
        const updatedCart = state.cartItems.map(cartItem =>
          cartItem.id === existItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        saveCartToLocalStorage(updatedCart);
        return {
          ...state,
          cartItems: updatedCart,
        };
      } else {
        const updatedCart = [...state.cartItems, { ...item, quantity: 1 }];
        saveCartToLocalStorage(updatedCart);
        return {
          ...state,
          cartItems: updatedCart,
        };
      }

    case UPDATE_CART:
      saveCartToLocalStorage(action.payload); 
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
