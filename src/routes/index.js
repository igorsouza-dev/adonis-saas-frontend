import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';
import SignUp from 'pages/Auth/SignUp';
import SignIn from 'pages/Auth/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
