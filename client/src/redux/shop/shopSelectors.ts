import { createSelector } from "reselect";
import { RootStateOrAny } from "react-redux";

const selectShop = (state: RootStateOrAny) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop: any) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  collections => (collections ? Object.values(collections) : [])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector([selectShopCollection], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!!shop.collections
);
