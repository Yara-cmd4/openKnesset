import './App.css';
import React, { useState, useEffect } from "react";


import Login from './pages/loginSignup/loginsignup';
import Haver from './pages/haverkneset/haverkneset';
import ForgetPassword from './pages/loginSignup/forgetPassword';
import ResetPassword from './pages/resetPassword/resetpassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div>
        <nav className='all-tabs'>
          <ul>
            <li className='active-nav'>
              <Link to="/main">Search</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/form-create">Form-create</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/haverkneset">
            <Haver />
          </Route>
          <Route path="/resetpassword">

            <ResetPassword />
          </Route>
          <Route path="/forgetpassword">
            <ForgetPassword/>
          </Route>
          <Route path="/main">

            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




