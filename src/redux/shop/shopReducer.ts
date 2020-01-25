import { AnyAction } from "redux";
import { ShopActionTypes } from "./shopTypes";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

export const shopReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
