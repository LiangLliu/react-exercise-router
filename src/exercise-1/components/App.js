import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <NavLink className="header-link" activeClassName="select" to="/">Home</NavLink>
            <NavLink className="header-link" activeClassName="select" to="/my-profile">My Profile</NavLink>
            <NavLink className="header-link" activeClassName="select" to="/about-us">About Us</NavLink>
          </div>

          <Switch>
            <Route exact path='/my-profile' component={MyProfile}/>
            <Route exact path='/about-us' component={AboutUs}/>
            <Route exact path='/' component={Home}/>
            <Route path='*' component={Home}/>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
