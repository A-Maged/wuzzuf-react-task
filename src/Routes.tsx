import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

export default function () {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route exact path="/" component={Welcome} />
    </Switch>
  );
}
