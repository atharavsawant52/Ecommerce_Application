import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/addToWishlist';
import { saveWishlistToLocalStorage, getWishlistFromLocalStorage } from '../utils/localStorage';

const initialState = {
  wishlistItems: getWishlistFromLocalStorage() || [], // Initialize with wishlist from localStorage if available
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const updatedWishlist = [...state.wishlistItems, action.payload];
      saveWishlistToLocalStorage(updatedWishlist); // Save updated wishlist to localStorage
      return {
        ...state,
        wishlistItems: updatedWishlist,
      };

    case REMOVE_FROM_WISHLIST:
      const filteredWishlist = state.wishlistItems.filter(item => item.id !== action.payload.id);
      saveWishlistToLocalStorage(filteredWishlist); // Save updated wishlist to localStorage
      return {
        ...state,
        wishlistItems: filteredWishlist,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
