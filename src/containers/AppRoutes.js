import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AddShot from "../components/AddShot/";
import Dashboard from "../components/Dashboard";
import AddStudent from "../components/AddStudent";

export default function AppRoutes() {
  return (
    <Router>
      <PageContainer sideChildren={<AddShot />}>
        <Switch>
          <Route path="/add-student">
            <AddStudent />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}
