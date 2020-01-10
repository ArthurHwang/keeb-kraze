import React, { ReactElement } from 'react';
import './Menu-item.styles.scss';

interface Props {
  title: string;
  linkUrl: string;
  imageUrl: string;
}

export const MenuItem: React.FC<Props> = ({
  title,
  linkUrl,
  imageUrl
}): ReactElement => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
