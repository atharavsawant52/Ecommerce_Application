
export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  export const clearUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  
  // Wishlist and Cart functions
  export const saveWishlistToLocalStorage = (wishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  export const getWishlistFromLocalStorage = () => {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  };
  
  export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  