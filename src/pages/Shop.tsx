import React, { useEffect, useState } from "react";
import { CollectionsOverview } from "../components/CollectionsOverview";
import styled from "styled-components";
import { Route, RouteProps } from "react-router-dom";
import { Collection } from "./Collection";
import { connect } from "react-redux";
import { updateCollections } from "../redux/shop/shopActions";
import { Dispatch } from "redux";
import { WithSpinner } from "../components/WithSpinner";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

interface Props {
  match: RouteProps;
  updateCollections: (collectionsMap: object) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap))
});

const _Shop: React.FC<Props> = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/mechkb-ecommerce/databases/(default)/documents/collections'
    // )
    //   .then(res => res.json())
    //   .then(data => console.log(data));
    // const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });

    // return () => {
    //   unsubscribeFromSnapshot();
    // };
  }, []);

  return (
    <StyledShop>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </StyledShop>
  );
};

export const Shop = connect(null, mapDispatchToProps)(_Shop);

const StyledShop = styled("div")`
  display: flex;
  flex-direction: column;
`;
