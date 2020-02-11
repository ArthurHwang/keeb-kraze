import React, { useEffect, ReactElement, lazy, Suspense } from "react";
import styled from "styled-components";
import { Route, RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchCollectionsStart } from "../redux/shop/shopActions";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../redux/shop/shopSelectors";
import { Spinner } from "../components/Spinner";

interface Props {
  match: RouteProps;
  updateCollections: (collectionsMap: object) => void;
  isCollectionFetching: boolean;
  fetchCollectionsStart: () => void;
  isCollectionsLoaded: any;
}

const CollectionContainer = lazy(() =>
  import("./CollectionContainer").then(module => ({
    default: module.CollectionContainer
  }))
);

const CollectionsOverviewContainer = lazy(() =>
  import("../components/CollectionsOverviewContainer").then(module => ({
    default: module.CollectionsOverviewContainer
  }))
);

const _Shop: React.FC<Props> = ({
  match,
  fetchCollectionsStart
}): ReactElement => {
  console.log(match);
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <StyledShop>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CollectionContainer}
        />
      </Suspense>
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
  max-width: 1600px;
  margin: 40px auto;
  padding: 0 5%;
`;
