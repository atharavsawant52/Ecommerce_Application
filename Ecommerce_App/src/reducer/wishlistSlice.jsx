const initialState = {
    wishlistItems: [], // Initial state as an array
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
  
      case 'REMOVE_FROM_WISHLIST':
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  