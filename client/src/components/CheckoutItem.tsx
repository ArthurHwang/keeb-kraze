import React, { ReactElement } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity
} from "../redux/cart/cartActions";
import { Dispatch } from "redux";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

interface Props {
  item: any;
  clearItemFromCart: any;
  increaseCartQuantity: any;
  decreaseCartQuantity: any;
}

const _CheckoutItem: React.FC<Props> = ({
  clearItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  item
}): ReactElement => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <StyledCheckoutItem>
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div onClick={() => decreaseCartQuantity(item)} className="arrow">
          <IoMdArrowDropleft style={{ position: "relative", top: "4px" }} />
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => increaseCartQuantity(item)} className="arrow">
          <IoMdArrowDropright style={{ position: "relative", top: "4px" }} />
        </div>
      </div>
      <span className="price">${price}</span>
      <span onClick={() => clearItemFromCart(item)} className="remove-button">
        &#10005;
      </span>
    </StyledCheckoutItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItemFromCart: (item: any) => dispatch(clearItemFromCart(item)),
  increaseCartQuantity: (item: any) => dispatch(increaseCartQuantity(item)),
  decreaseCartQuantity: (item: any) => dispatch(decreaseCartQuantity(item))
});

export const CheckoutItem = connect(null, mapDispatchToProps)(_CheckoutItem);

const StyledCheckoutItem = styled("div")`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    align-items: center;
    position: relative;
    right: 14px;

    .value {
      margin: 0 10px;
    }

    .arrow {
      font-size: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;
