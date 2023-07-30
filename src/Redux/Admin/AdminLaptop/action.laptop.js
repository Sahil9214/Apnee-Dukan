import {
  ADMIN_LAPTOP_ERROR,
  ADMIN_LAPTOP_SUCCESS,
  ADD_ADMIN_LAPTOP,
  EDIT_ADMIN_LAPTOP,
  DELETE_ADMIN_LAPTOP,
  ADMIN_LAPTOP_LOADING,
} from "./action.laptop.type";
import axios from "axios";

//GET DATA
export const getLaptop = (page) => async (dispatch) => {
  dispatch({ type: ADMIN_LAPTOP_LOADING });
  try {
    let res = await axios.get(
      `https://e-commercebackend-h0ag.onrender.com/laptop?_page=${page}&_limit=5`
    );

    dispatch({ type: ADMIN_LAPTOP_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_LAPTOP_ERROR });
  }
};

//ADD LAPTOP
export const addLaptop = (obj) => async (dispatch) => {
  dispatch({ type: ADMIN_LAPTOP_LOADING });
  try {
    let res = await axios.post(`https://e-commercebackend-h0ag.onrender.com/laptop`, obj);
    dispatch({ type: ADD_ADMIN_LAPTOP, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_LAPTOP_ERROR });
  }
};

//EDIT LAPTOP
export const editLaptop = (id, obj) => async (dispatch) => {
  dispatch({ type: ADMIN_LAPTOP_LOADING });
  try {
    await axios.patch(`https://e-commercebackend-h0ag.onrender.com/laptop/${id}`, obj);
    dispatch({ type: EDIT_ADMIN_LAPTOP, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_LAPTOP_ERROR });
  }
};

//DELETE LAPTOP
export const deleteLaptop = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_LAPTOP_LOADING });
  try {
    await axios.delete(`https://e-commercebackend-h0ag.onrender.com/laptop/${id}`);
    dispatch({ type: DELETE_ADMIN_LAPTOP, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_LAPTOP_ERROR });
  }
};
