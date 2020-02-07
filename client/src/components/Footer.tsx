import React, { ReactElement } from "react";
import styled from "styled-components";
import { GoKeyboard as Logo } from "react-icons/go";
import { Link } from "react-router-dom";

export const Footer: React.FC = ({}): ReactElement => {
  return (
    <StyledFooter>
      <span>&copy; 2020 Keeb Kraze LLC</span>
      <Link to="/">
        <Logo className="logo" fontSize="50px" />
      </Link>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  height: 80px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  padding: 0 60px;

  @media (max-width: 500px) {
    padding: 0 5px;
  }
`;
