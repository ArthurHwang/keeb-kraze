import React from 'react';
import { Homepage } from './pages/homepage/Homepage.component';
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';

const KeycapsPage = () => (
  <div>
    <h1>HII</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/keyboards" component={KeycapsPage} />
      </Switch>
    </div>
  );
};

export default App;
