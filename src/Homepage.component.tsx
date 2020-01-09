import React from 'react';
import './Homepage.styles.scss';

export const Homepage: React.FC = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">KEYBOARDS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">KEYCAPS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SWITCHES</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">DIY PARTS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">ACCESSORIES</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);
