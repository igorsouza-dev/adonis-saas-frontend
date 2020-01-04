import React from 'react';
import { Switch } from 'react-router-dom';
import Main from 'pages/Main';
import SignUp from 'pages/Auth/SignUp';
import SignIn from 'pages/Auth/SignIn';
import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/main" component={Main} isPrivate />
  </Switch>
);
export default Routes;
