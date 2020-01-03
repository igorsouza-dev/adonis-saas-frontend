import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Main from 'pages/Main';
import SignUp from 'pages/Auth/SignUp';
import SignIn from 'pages/Auth/SignIn';
import Route from './Route';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/main" component={Main} isPrivate />
    </Switch>
  </BrowserRouter>
);
export default Routes;
