import React from "react";
import { Switch, Route } from "react-router-dom";

import  Movie  from "./Movie";
import App from "../App";

export function Router() {
  return (
    <main>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </main>
  );
}

export default Router;