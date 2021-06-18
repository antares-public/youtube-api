import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import EditSearch from "../pages/EditSearch";

export const App: React.FC = () => (
  <Switch>
    <>
      <Route path="/" component={Login} />

      <div>
        <Route path="/search" exact component={Home} />
        {/* <Route path="/search/:id" component={Home} /> */}
        <Route path="/search:q" component={Home} />

        <Route path="/favorites" exact component={Favorites} />
        <Route path="/favorites/:id" component={EditSearch} />
      </div>
    </>
  </Switch>
);
