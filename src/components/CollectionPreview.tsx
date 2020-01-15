import React from "react";
import styled from "styled-components";
import { CollectionItem } from "./CollectionItem";

interface Props {
  title: string;
  items: itemParams[];
}

interface itemParams {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <StyledCollectionPreview className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </StyledCollectionPreview>
);

const StyledCollectionPreview = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;
