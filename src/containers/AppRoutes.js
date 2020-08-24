import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

import Dashboard from "../components/Dashboard";
import About from "../components/About";
import AddStudent from "../components/AddStudent";
import AddShot from "../components/AddShot/";

export default function AppRoutes() {
  return (
    <Router>
      <PageContainer sideChildren={<AddShot />}>
        <Switch>
          <Route path="/add-student">
            <AddStudent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}
