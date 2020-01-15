import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
// import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    {/* <StyledAppWrapper> */}
    <App />
    {/* </StyledAppWrapper> */}
  </BrowserRouter>,
  document.getElementById('root')
);
