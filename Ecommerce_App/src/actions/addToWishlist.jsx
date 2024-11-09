export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
};

export const removeFromWishlist = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: item,
    });

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== item.id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
};
