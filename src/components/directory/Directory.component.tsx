import React, { useState, ReactElement } from 'react';
import { MenuItem } from '../menu-item/Menu-item.component';
import './Directory.styles.scss';

export const Directory: React.FC = () => {
  const [sections] = useState([
    {
      title: 'keyboards',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/keyboards'
    },
    {
      title: 'keycaps',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/keycaps'
    },
    {
      title: 'switches',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/switches'
    },
    {
      title: 'accessories',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/accessories'
    },
    {
      title: 'diy parts',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/diy-parts'
    }
  ]);

  return (
    <div className="directory-menu">
      {sections.map(
        ({ title, id, linkUrl, imageUrl }): ReactElement => (
          <MenuItem
            key={id}
            title={title}
            linkUrl={linkUrl}
            imageUrl={imageUrl}
          />
        )
      )}
    </div>
  );
};
