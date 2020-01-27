import { CartActionTypes } from "./cartTypes";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addItem = (item: any) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = (item: any) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const increaseCartQuantity = (item: any) => ({
  type: CartActionTypes.INCREASE_CART_QUANTITY,
  payload: item
});

export const decreaseCartQuantity = (item: any) => ({
  type: CartActionTypes.DECREASE_CART_QUANTITY,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
