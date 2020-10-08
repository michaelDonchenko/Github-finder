import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import About from './components/pages/About'
import User from './components/user/User'



function App() {
  return (
    <div>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
        </Router>
    </div>
  )
}

export default App;
