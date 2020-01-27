import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}
export const CartItem: React.FC<Props> = ({
  name,
  quantity,
  price,
  imageUrl
}) => {
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

const StyledCartItem = styled("div")`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
`;
