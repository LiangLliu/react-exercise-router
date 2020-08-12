import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <NavLink className="header-link" activeClassName="select" to="/">Home</NavLink>
            <NavLink className="header-link" activeClassName="select" to="/products">Products</NavLink>
            <NavLink className="header-link" activeClassName="select" to="/my-profile">My Profile</NavLink>
            <NavLink className="header-link" activeClassName="select" to="/about-us">About Us</NavLink>
          </div>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/my-profile' component={MyProfile}/>
            <Route exact path='/about-us' component={AboutUs}/>
            <Route exact path="/products" component={Products} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
