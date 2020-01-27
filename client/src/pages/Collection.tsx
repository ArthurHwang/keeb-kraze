import React from "react";
import styled from "styled-components";
import { CollectionItem } from "../components/CollectionItem";
import { RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../redux/shop/shopSelectors";

interface Props {
  match: RouteProps;
}

export const _Collection: React.FC<Props> = ({ collection }: any) => {
  const { title, items } = collection;
  return (
    <StyledCollection>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any, idx: number) => (
          <CollectionItem item={item} key={idx} />
        ))}
      </div>
    </StyledCollection>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export const Collection = connect(mapStateToProps)(_Collection);

const StyledCollection = styled("div")`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
      margin-bottom: 30px;
    }
  }
`;
