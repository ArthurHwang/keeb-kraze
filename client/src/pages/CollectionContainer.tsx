import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../redux/shop/shopSelectors";
import { Collection } from "./Collection";
import { WithSpinner } from "../components/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded
});

export const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
  // @ts-ignore
)(Collection);
