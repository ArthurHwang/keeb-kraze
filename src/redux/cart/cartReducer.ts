import { CartActionTypes } from "./cartTypes";
import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux";
import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
  showCart: false,
  cartItems: []
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
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
