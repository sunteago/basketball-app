import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";

import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Students from "../pages/Students";
import AddShot from "../components/AddShot/";

export default function AppRoutes() {
  return (
    <Router>
      <Layout sideChildren={<AddShot />}>
        <Switch>
          <Route path="/add-student">
            <Students />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
