import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_SUCESS,
  AUTH_ADD_DATA,
  AUTH_TRUE,
  AUTH_FALSE,
} from "./auth.action.type";
import axios from "axios";
export const authAPIPOST = (obj) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res = axios.post(`https://e-commercebackend-h0ag.onrender.com/users`, obj);
    dispatch({ type: AUTH_ADD_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: AUTH_ERROR });
  }
};

export const authAPIGET = () => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res = await axios.get(`https://e-commercebackend-h0ag.onrender.com/users`);

    dispatch({ type: AUTH_SUCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const authTrue = () => (dispatch) => {
  dispatch({ type: AUTH_TRUE });
};

export const authFalse = () => (dispatch) => {
  dispatch({ type: AUTH_FALSE });
};
