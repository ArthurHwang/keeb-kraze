import React from "react";
import { CollectionsOverview } from "../components/CollectionsOverview";
import styled from "styled-components";

export const Shop: React.FC = () => (
  <StyledShop>
    <CollectionsOverview />
  </StyledShop>
);

const StyledShop = styled("div")`
  display: flex;
  flex-direction: column;
`;
