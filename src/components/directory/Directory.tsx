import React, { useState, ReactElement } from 'react';
import MenuItem from '../menu-item/MenuItem';
// import './Directory.styles.scss';
import styled from 'styled-components';

interface Props {
  history?: any;
}
export const Directory: React.FC<Props> = () => {
  const [sections] = useState([
    {
      title: 'keyboards',
      imageUrl:
        'https://live.staticflickr.com/5826/30295544320_68b9b0d6b5_b.jpg',
      id: 1,
      linkUrl: 'shop/keyboards'
    },
    {
      title: 'keycaps',
      imageUrl:
        'https://i.pinimg.com/originals/93/6a/fc/936afc46bac9f85de22966c88677217d.jpg',
      id: 2,
      linkUrl: 'shop/keycaps'
    },
    {
      title: 'switches',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Silent_Red_1024x1024@2x.jpg?v=1558704648',
      id: 3,
      linkUrl: 'shop/switches'
    },
    {
      title: 'accessories',
      imageUrl:
        'https://images.idgesg.net/images/article/2018/07/img_20180706_202831-100764491-large.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/accessories'
    },
    {
      title: 'parts',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1674/0405/products/sp111_plate_768x.png?v=1575664053',
      size: 'large',
      id: 5,
      linkUrl: 'shop/parts'
    }
  ]);

  return (
    <StyledDirectory className="directory-menu">
      {sections.map(
        ({ id, ...sectionProps }): ReactElement => (
          <MenuItem key={id} {...sectionProps} />
        )
      )}
    </StyledDirectory>
  );
};

const StyledDirectory = styled('div')`
  /* .directory-menu { */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* } */
`;
