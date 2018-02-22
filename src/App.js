import React, { Component } from 'react';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.css';

class App extends Component {
  render() {
    return <Router>
      <div className="App">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/signin">Sign In</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
        
        <Route exact path="/" component={LoadableHome} />
        <Route path="/signin" component={LoadableSignin} />
        <Route path="/contact" component={LoadableContact} />
      </div>
    </Router>;
  }
}

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading() {
    return <div>Loading...</div>
  }
})

const LoadableSignin = Loadable({
  loader: () => import(/* webpackChunkName: "signin" */ './Signin'),
  loading() {
    return <div>Loading...</div>
  }
})

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: "contact" */ './Contact'),
  loading() {
    return <div>Loading...</div>
  }
})

export default App;
