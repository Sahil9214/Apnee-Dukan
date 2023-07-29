import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "../src/Redux/Auth/auth.reducer";
import { reducer as cartReducer } from "./Redux/Cart/cart.reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  authReducer,
  cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
