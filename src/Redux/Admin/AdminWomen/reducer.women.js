import {
  ADD_ADMIN_WOMEN,
  ADMIN_WOMEN_ERROR,
  ADMIN_WOMEN_LOADING,
  ADMIN_WOMEN_SUCCESS,
  EDIT_ADMIN_WOMEN,
  DELETE_ADMIN_WOMEN,
} from "./action.women.type";

const initialState = {
  isLoading: false,
  isError: false,
  women: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_WOMEN_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_WOMEN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADMIN_WOMEN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        women: payload,
      };
    }
    case ADD_ADMIN_WOMEN: {
      return {
        ...state,
        isLoading: false,
        women: [...state.women, payload],
      };
    }
    default: {
      return state;
    }
  }
};
