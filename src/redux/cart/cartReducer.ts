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
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: any) => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.DECREASE_CART_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem: any) => {
          if (cartItem.id === action.payload.id) {
            // @ts-ignore
            return {
              ...cartItem,
              quantity: cartItem.quantity >= 1 ? cartItem.quantity - 1 : 0
            };
          } else {
            return cartItem;
          }
        })
      };
    case CartActionTypes.INCREASE_CART_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem: any) => {
          if (cartItem.id === action.payload.id) {
            // @ts-ignore
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        })
      };
    default:
      return state;
  }
};
