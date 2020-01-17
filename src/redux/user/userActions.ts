import { UserActionTypes } from "./userTypes";
import { User } from "../../components/Header";

export const setCurrentUser = (user: User) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
