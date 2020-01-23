import { AnyAction } from "redux";
import { ShopActionTypes } from "./shopTypes";

const INITIAL_STATE = {
  collections: null
};

export const shopReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };

    default:
      return state;
  }
};
