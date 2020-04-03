import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import User from '../pages/User';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/:username" exact>
        <User />
      </Route>
    </Switch>
  );
}
