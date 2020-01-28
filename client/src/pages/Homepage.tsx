import React, { ReactElement } from "react";
import styled from "styled-components";
import { Directory } from "../components/Directory";

export const Homepage: React.FC = (): ReactElement => {
  return (
    <StyledHomepage className="homepage">
      <Directory />
    </StyledHomepage>
  );
};

const StyledHomepage = styled("div")`
  padding: 20px 80px;
`;
