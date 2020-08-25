import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";

import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import AddStudent from "../pages/AddStudent";
import AddShot from "../components/AddShot/";

export default function AppRoutes() {
  return (
    <Router>
      <Layout sideChildren={<AddShot />}>
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
      </Layout>
    </Router>
  );
}
