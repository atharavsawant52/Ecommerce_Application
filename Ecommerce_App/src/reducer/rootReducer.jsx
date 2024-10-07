import { combineReducers } from 'redux';
import productReducer from '../reducer/ProductSlice'; 
import cartReducer from '../reducer/CardReducer'; 

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});

export default rootReducer;
