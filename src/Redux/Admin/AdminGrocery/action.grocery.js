import {
  ADD_ADMIN_GROCERY,
  ADMIN_GROCERY_ERROR,
  ADMIN_GROCERY_LOADING,
  ADMIN_GROCERY_SUCCESS,
  EDIT_ADMIN_GROCERY,
  DELETE_ADMIN_GROCERY,
} from "./action.grocery.type";
import axios from "axios";

//GET DATA
export const adminGetGrocery = (page) => async (dispatch) => {
  dispatch({ type: ADMIN_GROCERY_LOADING });
  try {
    let res = await axios.get(
      `http://localhost:8080/groceries?_page=${page}&_limit=5`
    );

    dispatch({ type: ADMIN_GROCERY_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_GROCERY_ERROR });
  }
};
//ADD DATA
export const addGrocery = (obj) => async (dispatch) => {
  dispatch({ type: ADMIN_GROCERY_LOADING });
  try {
    let res = await axios.post(`http://localhost:8080/groceries`, obj);

    dispatch({ type: ADD_ADMIN_GROCERY, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_GROCERY_ERROR });
  }
};
//EDIT DATA;
export const editGrocery = (id, obj) => async (dispatch) => {
  dispatch({ type: ADMIN_GROCERY_LOADING });
  try {
    await axios.patch(`http://localhost:8080/groceries/${id}`, obj);

    dispatch({ type: EDIT_ADMIN_GROCERY, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_GROCERY_ERROR });
  }
};

//DELETE DATA
export const deleteGrocery = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_GROCERY_LOADING });
  try {
    await axios.delete(`http://localhost:8080/groceries/${id}`);

    dispatch({ type: DELETE_ADMIN_GROCERY, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_GROCERY_ERROR });
  }
};
