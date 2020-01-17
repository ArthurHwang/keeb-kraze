import React from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { CustomButton } from "./CustomButton";
import { Link } from "react-router-dom";

interface Props {
  cartItems: any[];
}
export const CartDropdown: React.FC<Props> = ({ cartItems }) => (
  <StyledCart>
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} {...item}></CartItem>
      ))}
    </div>
    <Link to="/checkout">
      <CustomButton>Go To Checkout</CustomButton>
    </Link>
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
  overflow: hidden;

  button {
    margin-top: auto;
    color: black;
    /* color: ${({ theme }) => theme.black}; */
    font-size: 12px;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
