import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Index";
import History from "./pages/History";

export default function Routes({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/history" exact component={History} />
      </Switch>
    </Router>
  );
}
