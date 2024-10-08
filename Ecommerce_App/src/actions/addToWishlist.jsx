// src/actions/addToWishlist.js
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product,
    };
};

export const removeFromWishlist = (item) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: item,
    };
};
