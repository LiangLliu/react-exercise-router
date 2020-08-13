import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Products from "./Products";
import Product from "./Product";

const urlPaths = [
  "/my-profile",
  "/about-us",
  "/products",
  "/goods",
]

const isUrlPaths = (pathname) => {
  return !!urlPaths.find(it => it === pathname);
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">

            <NavLink exact to="/" className="header-link" activeClassName="select" isActive={
              (match, location) => (match ||
                (!isUrlPaths(location.pathname) &&
                  !location.pathname.startsWith("/products/")))
            }>Home
            </NavLink>

            <NavLink to="/products" className="header-link" activeClassName="select" isActive={
              (match, location) => (match || location.pathname === "/goods")
            }>Products
            </NavLink>
            <NavLink className="header-link" activeClassName="select" to="/my-profile">My Profile</NavLink>
            <NavLink className="header-link" activeClassName="select" to="/about-us">About Us</NavLink>
          </div>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/my-profile' component={MyProfile}/>
            <Route exact path='/about-us' component={AboutUs}/>
            <Route exact path={["/products", "/goods"]} component={Products}/>
            <Route exact path='/products/:id' component={Product}/>
            <Route path='*' component={Home}/>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
