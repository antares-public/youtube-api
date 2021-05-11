import React from "react";
import { Route, Switch } from "react-router-dom";

import styled from "styled-components";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import EditSearch from "../pages/EditSearch";

export const App: React.FC = () => (
  <Switch>
    <>
      <Route path="/login" component={Login} />

      <div>
        {/* <Navbar /> */}
        {/* <Container> */}
        <Route path="/search" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/favorites/:id" component={EditSearch} />
        {/* </Container> */}
      </div>
    </>
  </Switch>
);

const Container = styled.div`
  padding: 40px 200px;
`;
