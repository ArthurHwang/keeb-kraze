import { UserActionTypes } from "./userTypes";
import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux";

const INITIAL_STATE = {
  currentUser: null
};

export const userReducer = (
  state: RootStateOrAny = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};