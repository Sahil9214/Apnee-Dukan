import {
  ADMIN_MOBILE_ERROR,
  ADMIN_MOBILE_LOADING,
  ADMIN_MOBILE_SUCCESS,
  EDIT_ADMIN_MOBILE,
  DELETE_ADMIN_MOBILE,
  ADD_ADMIN_MOBILE,
} from "./action.mobile.type";
//GET DATA;
import axios from "axios";
export const getMobile = (page) => async (dispatch) => {
  dispatch({ type: ADMIN_MOBILE_LOADING });
  try {
    let res = await axios.get(`https://e-commercebackend-h0ag.onrender.com/mobiles?_page=${page}&_limit=5`);
    dispatch({ type: ADMIN_MOBILE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_MOBILE_ERROR });
  }
};

//POST DATA;

export const postMobile = (obj) => async (dispatch) => {
  dispatch({ type: ADMIN_MOBILE_LOADING });
  try {
    let res = await axios.post(`https://e-commercebackend-h0ag.onrender.com/mobile`, obj);
    dispatch({ type: ADD_ADMIN_MOBILE, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_MOBILE_ERROR });
  }
};

//EDIT DATA
export const editMobile = (id,obj) => async (dispatch) => {
  dispatch({ type: ADMIN_MOBILE_LOADING });
  try {
    let res = await axios.patch(`https://e-commercebackend-h0ag.onrender.com/mobile/${id}`, obj);
    dispatch({ type: EDIT_ADMIN_MOBILE, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_MOBILE_ERROR });
  }
};
//DELETE DATA

export const deleteMobile = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_MOBILE_LOADING });
  try {
    let res = await axios.delete(`https://e-commercebackend-h0ag.onrender.com/mobile/${id}`);
    dispatch({ type: DELETE_ADMIN_MOBILE, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_MOBILE_ERROR });
  }
};
