import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCESS,AUTH_ADD_DATA } from "./auth.action.type";
import axios from "axios";
export const authAPIPOST = (obj) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res = axios.post(`http://localhost:8080/users`, obj);
    dispatch({ type: AUTH_ADD_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: AUTH_ERROR });
  }
};

export const authAPIGET = () => async(dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res = await axios.get(`http://localhost:8080/users`);
    
    dispatch({ type: AUTH_SUCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
