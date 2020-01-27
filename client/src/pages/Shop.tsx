import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchCollectionsStart } from "../redux/shop/shopActions";
import { createStructuredSelector } from "reselect";
import { CollectionsOverviewContainer } from "../components/CollectionsOverviewContainer";
import { CollectionContainer } from "./CollectionContainer";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../redux/shop/shopSelectors";

interface Props {
  match: RouteProps;
  updateCollections: (collectionsMap: object) => void;
  isCollectionFetching: boolean;
  fetchCollectionsStart: () => void;
  isCollectionsLoaded: any;
}

const _Shop: React.FC<Props> = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <StyledShop>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionContainer}
      />
    </StyledShop>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

export const Shop = connect(mapStateToProps, mapDispatchToProps)(_Shop);

const StyledShop = styled("div")`
  display: flex;
  flex-direction: column;
`;
