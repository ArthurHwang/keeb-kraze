import React from 'react';
import { Homepage } from './pages/homepage/Homepage.component';
import { Route, Switch } from 'react-router-dom';
import { Shop } from './pages/shop/Shop.component';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
