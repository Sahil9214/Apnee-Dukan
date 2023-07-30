import {
  ADD_ADMIN_GROCERY,
  ADMIN_GROCERY_ERROR,
  ADMIN_GROCERY_LOADING,
  ADMIN_GROCERY_SUCCESS,
  EDIT_ADMIN_GROCERY,
  DELETE_ADMIN_GROCERY,
} from "./action.grocery.type";

const initialState = {
  isLoading: false,
  isError: false,
  grocery: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_GROCERY_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_GROCERY_SUCCESS: {
      return {
        ...state,
        isLoading: false,

        grocery: payload,
      };
    }
    case ADMIN_GROCERY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_ADMIN_GROCERY: {
      return {
        ...state,
        isLoading: false,
        grocery: [...state.grocery, payload],
      };
    }
    case DELETE_ADMIN_GROCERY: {
      const deleteData = state.grocery.filter((el) => el.id !== payload);
      console.log("asjasagsyww", deleteData);
      return {
        ...state,
        isLoading: false,
        grocery: deleteData,
      };
    }

    case EDIT_ADMIN_GROCERY: {
      console.log("edit", payload);
      const editGrocery = state.grocery.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.obj };
        }
        return item;
      });
      console.log("edit", editGrocery);
      return {
        ...state,
        isLoading: false,
        grocery: editGrocery,
      };
    }

    default: {
      return state;
    }
  }
};
