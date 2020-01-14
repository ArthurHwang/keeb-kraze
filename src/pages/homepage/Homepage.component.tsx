import React from 'react';
import { Directory } from '../../components/directory/Directory.component';
import './Homepage.styles.scss';

interface Props {}

export const Homepage: React.FC<Props> = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
