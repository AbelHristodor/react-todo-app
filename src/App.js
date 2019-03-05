import React, { Component } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
