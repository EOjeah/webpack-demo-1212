import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Home from './Home/Home';

const Content = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </>
);

export default Content;
