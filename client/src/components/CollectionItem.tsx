import React, { ReactElement } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";
import { CustomButton } from "./CustomButton";
import { Dispatch } from "redux";

interface Props {
  addItem: any;
  path?: any;
  item: {
    price: number;
    name: string;
    imageUrl: string;
  };
}

export const _CollectionItem: React.FC<Props> = ({
  item,
  addItem,
  path
}): ReactElement => {
  console.log(path);
  const { name, price, imageUrl } = item;
  return (
    <StyledCollectionItem path={path}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-header">
        <div className="opacity"></div>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </StyledCollectionItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: any) => dispatch(addItem(item))
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(_CollectionItem);

const StyledCollectionItem = styled("div")<{ path: string }>`
  width: ${props => (props.path ? "100%" : "25%")};
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 872px) {
    width: 100%;
  }

  .custom-button {
    width: 90%;
    margin: 0 auto;
    opacity: 0.7;
    position: absolute;
    bottom: 20px;
    display: none;

    border: 2px solid #606060;
    border-radius: 4px;

    @media (max-width: 872px) {
      display: block;
      background-color: #606060;
      border-radius: 4px;
      color: #fff;
    }
  }

  &:hover {
    .image {
      opacity: 1;
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .custom-button {
      opacity: 0.7;
      display: flex;
    }
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.7;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .collection-header {
    width: 100%;
    height: auto;
    display: flex;
    position: absolute;
    justify-content: space-between;
    font-size: 18px;
    align-items: center;
    padding: 3px 10%;
    color: ${({ theme }) => theme.black};

    .opacity {
      opacity: 0.6;
      width: 90%;
      height: 26px;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 20px;

      position: absolute;
      background-color: #606060;
      border: 2px solid #606060;
      border-radius: 4px;
    }

    .name,
    .price {
      font-weight: bold;
      text-shadow: 1px 1px 2px black;
      position: relative;
      top: 20px;
      z-index: 1;
      color: ${({ theme }) => theme.yellow};
    }
  }
`;
