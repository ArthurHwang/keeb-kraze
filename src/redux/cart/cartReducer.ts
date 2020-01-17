import { CartActionTypes } from "./cartTypes";
import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux";

const INITIAL_STATE = {
  showCart: false
};

export const cartReducer = (
  state: RootStateOrAny = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
};
