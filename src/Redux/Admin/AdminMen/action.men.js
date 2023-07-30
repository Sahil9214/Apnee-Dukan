import {
  ADMIN_MEN_ERROR,
  ADMIN_MEN_LOADING,
  ADMIN_MEN_SUCCESS,
  EDIT_ADMIN_MEN,
  DELETE_ADMIN_MEN,
  ADD_ADMIN_MEN,
} from "./action.men.type";
import axios from "axios";

//GET DATA MEN;
export const getMenData = (page) => async (dispatch) => {
  dispatch({ type: ADMIN_MEN_LOADING });
  try {
    let res = await axios.get(`http://localhost:8080/men?_page=${page}&_limit=5`);
    dispatch({ type: ADMIN_MEN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_MEN_ERROR });
  }
};

//ADD DATA;
export const postMenData = (obj) => async (dispatch) => {
  dispatch({ type: ADMIN_MEN_LOADING });
  try {
    let res = await axios.get(`http://localhost:8080/men`, obj);
    dispatch({ type: ADD_ADMIN_MEN, payload: res.data });
  } catch (err) {
    dispatch({ type: ADMIN_MEN_ERROR });
  }
};

//EDITDATA;
export const editMenData = (id, obj) => async (dispatch) => {
  dispatch({ type: ADMIN_MEN_LOADING });
  try {
    await axios.patch(`http://localhost:8080/men/${id}`, obj);
    dispatch({ type: EDIT_ADMIN_MEN, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_MEN_ERROR });
  }
};

//DELETEDATA;
export const deleteMenData = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_MEN_LOADING });
  try {
    await axios.delete(`http://localhost:8080/men/${id}`);
    dispatch({ type: DELETE_ADMIN_MEN, payload: id });
  } catch (err) {
    dispatch({ type: ADMIN_MEN_ERROR });
  }
};