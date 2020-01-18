import { createSelector } from "reselect";

const selectCart = (state: any) => state;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity: any, cartItem: any) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
