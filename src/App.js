import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';

import ButtonAppBar from './myappbar.js';
import MiniDrawer from './mydrawbar'
import Login from './Login.js'
import SimpleTabs from './myTab.js'
import Signup from './Signup.jsx'


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return (
  <div class = "center">
  <h2>About dgdgd dgdddddddddddddddddddddddddddddddddddddddddddddddddd</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>About</h2>
  <h2>Aboutdggggggggggggggggggg</h2>
  <h2>About dggggggggggggggggggggggggggggg</h2>
  </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}


function App() {
  return (
    <Router>
      <div>
        

        <MiniDrawer></MiniDrawer>
        
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/Login" component={Login} />
        <Route path="/tabmenu" component={SimpleTabs} />
        <Route path="/Signup" component={Signup} />

      </div>
    </Router>
  );
}

export default App;
