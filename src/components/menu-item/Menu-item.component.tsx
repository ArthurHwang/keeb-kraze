import React, { ReactElement } from 'react';
import './Menu-item.styles.scss';
import { url } from 'inspector';

interface Props {
  title: string;
  linkUrl: string;
  imageUrl: string;
  size?: string;
}

export const MenuItem: React.FC<Props> = ({
  title,
  linkUrl,
  imageUrl,
  size
}): ReactElement => (
  <div className={`${size && size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      {' '}
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
