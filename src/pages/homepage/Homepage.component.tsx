import React from 'react';
import { Directory } from '../../components/directory/Directory.component';
import './Homepage.styles.scss';

export const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
