export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const addToCart = (product) => {
  return (dispatch) => {
   
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

   
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
    
      existingProduct.quantity += 1;
    } else {

      product.quantity = 1;
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };
};


export const updateCart = (updatedItems) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CART,
      payload: updatedItems,
    });

    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };
};
