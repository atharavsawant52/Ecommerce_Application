// utils/localStorage.js

// User Functions
export const saveUserToLocalStorage = (user) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    console.warn("Attempted to save null user to local storage.");
  }
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

// Wishlist Functions
export const saveWishlistToLocalStorage = (wishlist) => {
  if (wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  } else {
    console.warn("Attempted to save null wishlist to local storage.");
  }
};

export const getWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

export const clearWishlistFromLocalStorage = () => {
  localStorage.removeItem('wishlist');
};

// Cart Functions
export const saveCartToLocalStorage = (cart) => {
  if (cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    console.warn("Attempted to save null cart to local storage.");
  }
};

export const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const clearCartFromLocalStorage = () => {
  localStorage.removeItem('cart');
};
