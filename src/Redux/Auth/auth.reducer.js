import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_SUCESS,
  AUTH_ADD_DATA,
  AUTH_TRUE,
  AUTH_FALSE
} from "./auth.action.type";
const initialState = {
  isLoading: false,
  isError: false,
  auth: false,
  authData: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_SUCESS: {
      return {
        ...state,
        isLoading: false,
        authData: payload,
      };
    }
    case AUTH_TRUE: {
      return {
        ...state,
        auth: true,
      };
    }
    case AUTH_FALSE: {
      return {
        ...state,
        auth: false,
      };
    }
    case AUTH_ADD_DATA: {
      return {
        ...state,
        isLoading: false,
        authData: [...state.authData, payload],
      };
    }
    case AUTH_ERROR: {
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
