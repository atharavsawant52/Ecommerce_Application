import { combineReducers } from 'redux';
import productReducer from '../reducer/ProductSlice'; 
import cartReducer from '../reducer/CardReducer'; 
import wishlistReducer from '../reducer/wishlistSlice'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
});

export default rootReducer;
