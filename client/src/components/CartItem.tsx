import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}
const _CartItem: React.FC<Props> = ({
  name,
  quantity,
  price,
  imageUrl
}): ReactElement => {
  if (quantity > 1) {
    price = quantity * price;
  }
  return (
    <StyledCartItem>
      <img alt="item" src={imageUrl} />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </StyledCartItem>
  );
};

export const CartItem = React.memo(_CartItem);

const StyledCartItem = styled("div")`
  width: 100%;
  display: flex;
  height: 60px;
  margin-bottom: 15px;

  img {
    width: 30%;
    object-fit: cover;
  }

  .item-details {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 0 10px 20px;

    .name {
      font-size: 16px;
    }
  }
`;
