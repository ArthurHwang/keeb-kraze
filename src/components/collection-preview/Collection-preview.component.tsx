import React from 'react';

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
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  </div>
);
