import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { navReducer } from "./nav/navReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  nav: navReducer
});
