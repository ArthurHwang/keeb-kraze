import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../components/CollectionPreview";
import { selectCollectionsForPreview } from "../redux/shop/shopSelectors";

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview
});

interface Props {
  collection: any[];
}

const _CollectionsOverview: React.FC<Props> = ({ collection }) => (
  <StyledCollectionsOverview>
    {collection.map(({ id, ...otherCollectionProps }: any) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </StyledCollectionsOverview>
);

export const CollectionsOverview = connect(mapStateToProps)(
  _CollectionsOverview
);

const StyledCollectionsOverview = styled("div")``;