import axios from "axios";
import { CART_LOADING, CART_ERROR, CART_SUCCESS } from "../Cart/cart.action.type";



export const cardDataGet = (id) => async (dispatch) => {
  console.log("id",id)
  dispatch({ type: CART_LOADING });
  try {
    let res = await axios.get(`http://localhost:8080/users/${id}`);

    dispatch({ type: CART_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: CART_ERROR });
  }
};
