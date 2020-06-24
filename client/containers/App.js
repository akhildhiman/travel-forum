// import { hot } from "react-hot-loader/root"
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../components/HomePage"
import NotFoundPage from "../components/NotFoundPage"
import oAuthPage from "../containers/oAuthPage"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/auth/google" component={oAuthPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

// export default hot(App)
export default App
