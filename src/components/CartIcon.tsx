import React from "react";
import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
// import { connect, RootStateOrAny } from "react-redux";

interface Props {
  handleClick: () => void;
  // cart: any[];
  cartItems: any[];
}

// interface ReduxProps {
//   cart: RootStateOrAny;
// }

// const mapStateToProps = ({ cart }: ReduxProps) => ({
//   cart: cart.cartItems
// });

export const CartIcon: React.FC<Props> = ({ handleClick, cartItems }) => {
  let quantityCount = 0;

  cartItems.forEach(item => (quantityCount += item.quantity));
  return (
    <StyledCartIcon onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantityCount}</span>
    </StyledCartIcon>
  );
};

// export const CartIcon = connect(mapStateToProps)(_CartIcon);

const StyledCartIcon = styled("div")`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5px;
  cursor: pointer;

  .shopping-icon {
    width: 40px;
    height: 40px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;
