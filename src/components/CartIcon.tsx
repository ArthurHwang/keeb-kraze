import React from "react";
import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

interface Props {
  handleClick: () => void;
  itemCount: number;
}

export const CartIcon: React.FC<Props> = ({ handleClick, itemCount }) => {
  return (
    <StyledCartIcon onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </StyledCartIcon>
  );
};

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
