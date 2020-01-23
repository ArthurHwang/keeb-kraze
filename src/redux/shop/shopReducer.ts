import { SHOP_DATA } from "./shop.data";
import { AnyAction } from "redux";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

export const shopReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};