import React from 'react';
import { Directory } from '../../components/directory/Directory';
// import './Homepage.styles.scss';
import styled from 'styled-components';

// interface Props {}

export const Homepage: React.FC = () => {
  return (
    <StyledHomepage className="homepage">
      <Directory />
    </StyledHomepage>
  );
};

const StyledHomepage = styled('div')`
  /* .homepage { */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  /* } */
`;
