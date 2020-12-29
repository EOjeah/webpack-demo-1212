import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Certifications from './certifications/Certifications';
import Code from './Code/Code';

const Content = () => (
  <>
    <Switch>
      <Route exact path="/certs" component={Certifications} />
      <Route exact path="/code" component={Code} />
    </Switch>
  </>
);

export default Content;
