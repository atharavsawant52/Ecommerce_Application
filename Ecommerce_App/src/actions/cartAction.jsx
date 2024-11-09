export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const updateCart = (updatedItems) => ({
    type: UPDATE_CART,
    payload: updatedItems,
});
