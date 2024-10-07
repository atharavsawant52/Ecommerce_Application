import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../reducer/ProductSlice';

export default configureStore({
    reducer:{
        product:ProductReducer,
    }
})