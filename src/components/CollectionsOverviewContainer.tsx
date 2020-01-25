import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../redux/shop/shopSelectors";
import { WithSpinner } from "./WithSpinner";
import { CollectionsOverview } from "./CollectionsOverview";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
  // @ts-ignore
)(CollectionsOverview);
