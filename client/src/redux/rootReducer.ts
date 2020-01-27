import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { shopReducer } from "./shop/shopReducer";
import { persistReducer } from "redux-persist";
import { directoryReducer } from "./directory/directoryReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const _rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export const rootReducer = persistReducer(persistConfig, _rootReducer);
