import { combineReducers } from 'redux';
import productReducer from '../reducer/ProductSlice'; 
import cartReducer from '../reducer/CardReducer'; 
import wishlistReducer from '../reducer/wishlistSlice';
import loginLogoutReducer from '../reducer/LoginLogout';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    user: loginLogoutReducer,
});

export default rootReducer;

