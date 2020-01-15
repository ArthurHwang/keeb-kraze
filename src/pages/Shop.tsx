import React, { useState } from "react";
import { SHOP_DATA } from "../data/Shop.data";
import { CollectionPreview } from "../components/CollectionPreview";

export const Shop: React.FC = () => {
  const [collections] = useState([...SHOP_DATA]);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
