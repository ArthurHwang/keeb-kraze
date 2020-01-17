import { CartActionTypes } from "./cartTypes";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addItem = (item: any) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
