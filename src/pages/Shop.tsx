import React from "react";
import { CollectionsOverview } from "../components/CollectionsOverview";
import styled from "styled-components";
import { Route, RouteProps } from "react-router-dom";
import { Collection } from "./Collection";

interface Props {
  match: RouteProps;
}

export const Shop: React.FC<Props> = ({ match }) =>
  (console.log(match) as any) || (
    <StyledShop>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </StyledShop>
  );

const StyledShop = styled("div")`
  display: flex;
  flex-direction: column;
`;
