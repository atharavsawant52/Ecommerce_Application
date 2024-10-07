export const addToWishlist = (product) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: product,
    };
};
