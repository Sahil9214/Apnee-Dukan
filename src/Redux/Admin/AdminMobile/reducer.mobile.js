import {
  ADMIN_MOBILE_ERROR,
  ADMIN_MOBILE_LOADING,
  ADMIN_MOBILE_SUCCESS,
  EDIT_ADMIN_MOBILE,
  DELETE_ADMIN_MOBILE,
  ADD_ADMIN_MOBILE,
} from "./action.mobile.type";

const initialState = {
  isLoading: false,
  isError: false,
  mobile: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_MOBILE_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_MOBILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        mobile: payload,
      };
    }
    case ADMIN_MOBILE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_ADMIN_MOBILE: {
      return {
        ...state,
        isLoading: false,
        mobile: [...state.mobile, payload],
      };
    }
    case DELETE_ADMIN_MOBILE: {
      const deleteData = state.mobile.filter((el) => el.id !== payload);
      return {
        ...state,
        isLoading: false,
        mobile: deleteData,
      };
    }
    default: {
      return state;
    }
  }
};
