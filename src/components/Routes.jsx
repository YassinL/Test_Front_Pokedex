import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import OnePokemon from "./Pages/OnePokemon/OnePokemon";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:id" component={OnePokemon} />
    </Switch>
  );
}
