import React, { ReactElement } from "react";
import styled from "styled-components";
import { CollectionItem } from "../components/CollectionItem";
import { RouteProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectCollection } from "../redux/shop/shopSelectors";

interface Props {
  match: RouteProps;
  collection: any;
  location: any;
}

const _Collection: React.FC<Props> = ({
  collection,
  location
}): ReactElement => {
  const { title, items } = collection;
  console.log(location);
  return (
    <StyledCollection>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any, idx: number) => (
          <CollectionItem item={item} key={idx} path={location.pathname} />
        ))}
      </div>
    </StyledCollection>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export const Collection = compose(
  withRouter,
  connect(mapStateToProps)
)(_Collection);

const StyledCollection = styled("div")`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    padding: 10px 0;
    display: inline-block;
    font-size: 18px;
    text-transform: uppercase;
  }

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.grey};
    text-align: center;
    margin: 0;
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
  }

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;

    @media (max-width: 872px) {
      display: block;
    }
  }
`;
