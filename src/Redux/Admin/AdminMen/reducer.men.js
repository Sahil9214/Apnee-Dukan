import {
  ADMIN_MEN_ERROR,
  ADMIN_MEN_LOADING,
  ADMIN_MEN_SUCCESS,
  EDIT_ADMIN_MEN,
  DELETE_ADMIN_MEN,
  ADD_ADMIN_MEN,
} from "./action.men.type";

const initialState = {
  isLoading: false,
  isError: false,
  men: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_MEN_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_MEN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        men: payload,
      };
    }
    case ADMIN_MEN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_ADMIN_MEN: {
      return {
        ...state,
        isLoading: false,
        men: [...state.men, payload],
      };
    }
    case DELETE_ADMIN_MEN: {
      const deleteData = state.men.filter((el) => el.id !== payload);
      return {
        ...state,
        isLoading: false,
        men: deleteData,
      };
    }

    default: {
      return state;
    }
  }
};
