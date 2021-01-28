import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
