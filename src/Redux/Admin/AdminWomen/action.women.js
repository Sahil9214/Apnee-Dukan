import axios from "axios";
import {
  ADD_ADMIN_WOMEN,
  ADMIN_WOMEN_ERROR,
  ADMIN_WOMEN_LOADING,
  ADMIN_WOMEN_SUCCESS,
  EDIT_ADMIN_WOMEN,
  DELETE_ADMIN_WOMEN,
} from "./action.women.type";
//GET DATA;

export const getWomenData = (page) => async (dispatch) => {
  dispatch({ type: ADMIN_WOMEN_LOADING });
  try {
    let res = await axios.get(` http://localhost:8080/women?_page=${page}&_limit=5`);
    dispatch({ type: ADMIN_WOMEN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_WOMEN_ERROR });
  }
};

//POST DATA;
export const postWomenData = (obj) => async (dispatch) => {
  dispatch({ type: ADMIN_WOMEN_LOADING });
  try {
    let res = await axios.post(` http://localhost:8080/women`, obj);
    dispatch({ type: ADD_ADMIN_WOMEN, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_WOMEN_ERROR });
  }
};

//EDIT DATA'
export const editWomenData = (id, obj) => async (dispatch) => {
  dispatch({ type: ADMIN_WOMEN_LOADING });
  try {
    await axios.patch(` http://localhost:8080/women/${id}`, obj);
    dispatch({ type: EDIT_ADMIN_WOMEN, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_WOMEN_ERROR });
  }
};
//DELETE DATA;

export const deleteWomenData = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_WOMEN_LOADING });
  try {
    await axios.patch(` http://localhost:8080/women/${id}`);
    dispatch({ type: DELETE_ADMIN_WOMEN, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_WOMEN_ERROR });
  }
};
