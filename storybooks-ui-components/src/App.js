import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style/normalize.css";
import "./style/index.sass";
import MainScreen from "../src/components/main-screen/MainScreen";
import Schedule from "../src/components/schedule/Schedule";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/schedule/:id" component={Schedule} />
      </Router>
    );
  }
}
