import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoKeyboard as Logo } from "react-icons/go";

export const Header: React.FC = () => (
  <StyledHeader>
    <Link className="logo-container" to="/">
      <Logo fontSize="50px" className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
    </div>
  </StyledHeader>
);

const StyledHeader = styled("header")`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    display: flex;
    align-items: center;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
    }
  }
`;
