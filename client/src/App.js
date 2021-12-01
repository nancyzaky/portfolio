import React, { useState, useEffect } from "react";
import Main from "./Main";
import Home from "./Home";
import Nav from "./Nav";
import Project from "./Project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./Resume";
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
            <Project />
          </Route>

          <Route exact path="/resume.pdf">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
