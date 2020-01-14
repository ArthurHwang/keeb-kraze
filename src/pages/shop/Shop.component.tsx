import React, { useState } from 'react';
import { SHOP_DATA } from './Shop.data';
import { CollectionPreview } from '../../components/collection-preview/Collection-preview.component';

import './Shop.styles.scss';

export const Shop: React.FC = () => {
  const [collections, setCollections] = useState([...SHOP_DATA]);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
