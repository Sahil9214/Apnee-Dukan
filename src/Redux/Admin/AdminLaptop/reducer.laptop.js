import {
  ADMIN_LAPTOP_ERROR,
  ADMIN_LAPTOP_SUCCESS,
  ADD_ADMIN_LAPTOP,
  EDIT_ADMIN_LAPTOP,
  DELETE_ADMIN_LAPTOP,
  ADMIN_LAPTOP_LOADING,
} from "./action.laptop.type";

const initialState = {
  isLoading: false,
  isError: false,
  laptop: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LAPTOP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_LAPTOP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        laptop: payload,
      };
    }
    case ADMIN_LAPTOP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_ADMIN_LAPTOP: {
      return {
        ...state,
        isLoading: false,
        laptop: [...state.laptop, payload],
      };
    }
    case DELETE_ADMIN_LAPTOP: {
      let deleteData = state.laptop.filter((el) => el.id !== payload);

      return {
        ...state,
        isLoading: false,
        laptop: deleteData,
      };
    }
    default: {
      return state;
    }
  }
};
