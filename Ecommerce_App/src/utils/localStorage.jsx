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
  if (!isLocalStorageAvailable()) return;
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
  if (!isLocalStorageAvailable()) return defaultValue;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

export const removeFromLocalStorage = (key) => {
  if (!isLocalStorageAvailable()) return;
  localStorage.removeItem(key);
};

export const clearAllUserData = () => {
  clearUserFromLocalStorage();
  clearCartFromLocalStorage();
  clearWishlistFromLocalStorage();
  removeFromLocalStorage('orders');
  removeFromLocalStorage('cancellations');
};

export const saveUserToLocalStorage = (user) => {
  clearAllUserData();
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

export const login = (user) => {
  clearAllUserData();
  saveUserToLocalStorage(user);
  saveCartToLocalStorage([]);
  saveWishlistToLocalStorage([]);
};

export const signup = (user) => {
  clearAllUserData();
  saveUserToLocalStorage(user);
  saveCartToLocalStorage([]);
  saveWishlistToLocalStorage([]);
};

export const logout = () => {
  clearUserFromLocalStorage();
  clearCartFromLocalStorage();
  clearWishlistFromLocalStorage();
};
