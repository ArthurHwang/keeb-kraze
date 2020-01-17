import React from "react";
import styled from "styled-components";
import { Directory } from "../components/Directory";

export const Homepage: React.FC = () => {
  return (
    <StyledHomepage className="homepage">
      <Directory />
    </StyledHomepage>
  );
};

const StyledHomepage = styled("div")`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  padding: 20px 80px;
`;
