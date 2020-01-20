import React from "react";
import styled from "styled-components";
import { connect, RootStateOrAny } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import { CheckoutItem } from "../components/CheckoutItem";

interface Props {
  cartItems: any[];
  total: number;
}

const mapStateToProps = ({ cart }: RootStateOrAny) => ({
  cartItems: selectCartItems(cart),
  total: selectCartTotal(cart)
});

const _Checkout: React.FC<Props> = ({ cartItems, total }) =>
  (console.log(cartItems, total) as any) || (
    <StyledCheckout>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </StyledCheckout>
  );

export const Checkout = connect(mapStateToProps)(_Checkout);

const StyledCheckout = styled("div")`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`;
