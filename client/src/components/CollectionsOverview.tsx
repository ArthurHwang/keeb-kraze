import React, { ReactElement } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../components/CollectionPreview";
import { selectCollectionsForPreview } from "../redux/shop/shopSelectors";

interface Props {
  collection: any[];
}

const _CollectionsOverview: React.FC<Props> = ({
  collection
}): ReactElement => (
  <StyledCollectionsOverview>
    {collection.map(({ id, ...otherCollectionProps }: any) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </StyledCollectionsOverview>
);

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview
});

export const CollectionsOverview = connect(mapStateToProps)(
  _CollectionsOverview
);

const StyledCollectionsOverview = styled("div")``;
