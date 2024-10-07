import axios from 'axios';
import { useDispatch } from "react-redux";
import { getProducts } from "../reducer/ProductSlice";

export const asyncgetproducts = () => async (dispatch, getState) => 
    {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(getProducts(response.data));
    } catch (error) {
        console.log(error);
    }
};
