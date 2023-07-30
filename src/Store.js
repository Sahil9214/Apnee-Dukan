import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "../src/Redux/Auth/auth.reducer";
import { reducer as cartReducer } from "./Redux/Cart/cart.reducer";

import { reducer as groceryReducer } from "./Redux/Admin/AdminGrocery/reducer.grocery";
import { reducer as menReducer } from "./Redux/Admin/AdminMen/reducer.men";
import { reducer as womenReducer } from "./Redux/Admin/AdminWomen/reducer.women";
import { reducer as mobileReducer } from "./Redux/Admin/AdminMobile/reducer.mobile";
import { reducer as laptopReducer } from "./Redux/Admin/AdminLaptop/reducer.laptop";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  groceryReducer,
  menReducer,
  womenReducer,
  mobileReducer,
  laptopReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
