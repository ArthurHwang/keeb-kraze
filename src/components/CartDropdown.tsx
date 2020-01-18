import React from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { CustomButton } from "./CustomButton";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

interface Props {
  cartItems: any;
}
const CartDropdown: React.FC<any> = ({ cartItems, history }) =>
  (console.log(history) as any) || (
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
      <Link to="/checkout">
        <CustomButton>Go To Checkout</CustomButton>
      </Link>
    </StyledCart>
  );

// export const CartDropdown = withRouter(_CartDropdown as any);

export default withRouter(CartDropdown);

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
