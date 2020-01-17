import { NavActionTypes } from "./navTypes";

const INITIAL_STATE = {
  showCart: false
};

export const navReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case NavActionTypes.TOGGLE_CART:
      console.log(state);
      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
};
