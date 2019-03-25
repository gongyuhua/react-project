import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Index from "./pages/home/index";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/index" component={Index} />
          <Route exact path="/" component={Login} />
          {/*<Redirect from="*" to="/login" />*/}
        </div>
      </Router>
    );
  }
}

export default Routes;
