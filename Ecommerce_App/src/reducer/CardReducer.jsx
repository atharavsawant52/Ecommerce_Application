import { ADD_TO_CART, UPDATE_CART } from '../actions/cartAction';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(cartItem => cartItem.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(cartItem =>
                        cartItem.id === existItem.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                };
            }
        case UPDATE_CART:
            return {
                ...state,
                cartItems: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
