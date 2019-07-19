import Dashboard from "./src/Components/Dashboard/Dashboard";
import Form from "./src/Components/Form/Form";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/api/inventory" component={Form} />
  </Switch>
);
