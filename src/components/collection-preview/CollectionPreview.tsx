import React from 'react';
import styled from 'styled-components';

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
        .map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
    </div>
  </StyledCollectionPreview>
);

const StyledCollectionPreview = styled('div')``;
