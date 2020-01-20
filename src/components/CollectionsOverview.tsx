import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../components/CollectionPreview";
import { selectShopCollection } from "../redux/shop/shopSelectors";

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection
});

interface Props {
  collection: {
    id: number;
    title: string;
    routeName: string;
    items: { id: number; name: string; imageUrl: string; price: number }[];
  }[];
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
