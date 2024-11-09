const isLocalStorageAvailable = () => {
  try {
    const test = '__test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const saveToLocalStorage = (key, data) => {
  if (!isLocalStorageAvailable()) {
    console.warn('LocalStorage is not available in this environment.');
    return;
  }
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    console.warn(`Attempted to save null or undefined data to local storage for key: ${key}`);
  }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
  if (!isLocalStorageAvailable()) {
    console.warn('LocalStorage is not available in this environment.');
    return defaultValue;
  }
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

export const removeFromLocalStorage = (key) => {
  if (!isLocalStorageAvailable()) {
    console.warn('LocalStorage is not available in this environment.');
    return;
  }
  localStorage.removeItem(key);
};

// Specific functions to manage user, wishlist, cart, and products

export const saveUserToLocalStorage = (user) => {
  saveToLocalStorage('user', user);
};

export const getUserFromLocalStorage = () => {
  return getFromLocalStorage('user');
};

export const clearUserFromLocalStorage = () => {
  removeFromLocalStorage('user');
};

export const saveWishlistToLocalStorage = (wishlist) => {
  saveToLocalStorage('wishlist', wishlist);
};

export const getWishlistFromLocalStorage = () => {
  return getFromLocalStorage('wishlist', []);
};

export const clearWishlistFromLocalStorage = () => {
  removeFromLocalStorage('wishlist');
};

export const saveCartToLocalStorage = (cart) => {
  saveToLocalStorage('cart', cart);
};

export const getCartFromLocalStorage = () => {
  return getFromLocalStorage('cart', []);
};

export const clearCartFromLocalStorage = () => {
  removeFromLocalStorage('cart');
};

export const saveProductsToLocalStorage = (products) => {
  saveToLocalStorage('products', products);
};

export const getProductsFromLocalStorage = () => {
  return getFromLocalStorage('products', []);
};
