import { CART_LOADING, CART_ERROR, CART_SUCCESS } from "../Cart/cart.action.type";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    }
    case CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
