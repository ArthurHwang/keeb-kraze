import React from "react";
import styled from "styled-components";

interface Props {
  item: any;
}

export const CheckoutItem: React.FC<Props> = ({
  item: { name, imageUrl, price, quantity }
}) => (
  <StyledCheckoutItem>
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button">&#10005;</span>
  </StyledCheckoutItem>
);

const StyledCheckoutItem = styled("div")``;
