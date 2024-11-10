import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/addToWishlist';
import { saveWishlistToLocalStorage, getWishlistFromLocalStorage } from '../utils/localStorage';

const initialState = {
  wishlistItems: getWishlistFromLocalStorage() || [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const updatedWishlist = [...state.wishlistItems, action.payload];
      saveWishlistToLocalStorage(updatedWishlist);
      return {
        ...state,
        wishlistItems: updatedWishlist,
      };

    case REMOVE_FROM_WISHLIST:
      const filteredWishlist = state.wishlistItems.filter(item => item.id !== action.payload.id);
      saveWishlistToLocalStorage(filteredWishlist);
      return {
        ...state,
        wishlistItems: filteredWishlist,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
