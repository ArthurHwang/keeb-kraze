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
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
