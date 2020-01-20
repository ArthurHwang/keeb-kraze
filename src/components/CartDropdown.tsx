import React from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { CustomButton } from "./CustomButton";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../redux/cart/cartActions";
import { connect } from "react-redux";

interface Props {
  cartItems: any;
  history: any;
  toggleCart: () => void;
  dispatch: any;
}

const _CartDropdown: React.FC<Props> = ({ cartItems, history, dispatch }) => (
  <StyledCart>
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item: any) => (
          <CartItem key={item.id} {...item}></CartItem>
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCart());
      }}
    >
      Go To Checkout
    </CustomButton>
  </StyledCart>
);

// @ts-ignore
export const CartDropdown = withRouter(
  // @ts-ignore
  connect()(_CartDropdown)
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

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  button {
    margin-top: auto;
    color: black;
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
