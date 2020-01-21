import { createSelector } from "reselect";
import { RootStateOrAny } from "react-redux";

const selectShop = (state: RootStateOrAny) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop: any) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  collection => Object.values(collection)
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]
  );
