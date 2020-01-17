import React from "react";
import styled from "styled-components";
import { CustomButton } from "./CustomButton";

export const CartDropdown: React.FC = () => (
  <StyledCart>
    <div className="cart-items"></div>
    <CustomButton>CART</CustomButton>
  </StyledCart>
);

const StyledCart = styled("div")`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  button {
    margin-top: auto;
  }
`;
