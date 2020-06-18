import { hot } from "react-hot-loader/root"
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../components/HomePage"
import NotFoundPage from "../components/NotFoundPage"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default hot(App)
