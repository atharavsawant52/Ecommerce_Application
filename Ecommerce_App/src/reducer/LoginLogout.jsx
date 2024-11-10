import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

const initialState = {
  user: getFromLocalStorage('user', null),
  wishlist: getFromLocalStorage('wishlist', []),
  cart: getFromLocalStorage('cart', []),
};

const loginLogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // Clear the previous user's data on login
      removeFromLocalStorage('wishlist');
      removeFromLocalStorage('cart');
      
      saveToLocalStorage('user', action.payload);
      return {
        ...state,
        user: action.payload,
        wishlist: [],  // Clear wishlist for new user
        cart: [],      // Clear cart for new user
      };

    case 'LOGOUT':
      removeFromLocalStorage('user');
      removeFromLocalStorage('wishlist');
      removeFromLocalStorage('cart');
      return {
        ...state,
        user: null,
        wishlist: [],
        cart: [],
      };

    case 'ADD_TO_WISHLIST':
      const updatedWishlist = [...state.wishlist, action.payload];
      saveToLocalStorage('wishlist', updatedWishlist);
      return {
        ...state,
        wishlist: updatedWishlist,
      };

    case 'REMOVE_FROM_WISHLIST':
      const filteredWishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      saveToLocalStorage('wishlist', filteredWishlist);
      return {
        ...state,
        wishlist: filteredWishlist,
      };

    case 'ADD_TO_CART':
      const cartItem = action.payload;
      const existingCartItem = state.cart.find(item => item.id === cartItem.id);

      let updatedCart;
      if (existingCartItem) {
        updatedCart = state.cart.map(item =>
          item.id === existingCartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...cartItem, quantity: 1 }];
      }

      saveToLocalStorage('cart', updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    case 'REMOVE_FROM_CART':
      const cartAfterRemoval = state.cart.filter(item => item.id !== action.payload.id);
      saveToLocalStorage('cart', cartAfterRemoval);
      return {
        ...state,
        cart: cartAfterRemoval,
      };

    case 'UPDATE_CART':
      saveToLocalStorage('cart', action.payload);
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default loginLogoutReducer;
