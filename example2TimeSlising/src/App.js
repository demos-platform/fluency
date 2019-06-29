import React from 'react';
import { Router } from "@reach/router";

import NavLink from './NavLink';

import Common from './examples/common';
import Webworker from './examples/webworker';
import RIC from './examples/ric';
import TimeSlicing from './examples/timeSlicing';

import './index.css';

function App() {
  return (
    <div className="app">
      <h1 className="duoduo-title"><span className="duoduo-title-name"></span></h1>
      <div className="body">
        <nav>
          <NavLink to="/">复现情景</NavLink>
          <NavLink to="webworker">demo1</NavLink>
          <NavLink to="requestIdleCallback">demo2</NavLink>
          <NavLink to="timeSlicing">demo3</NavLink>
        </nav>
        <div className="tab-container">
          <Router>
            <Common path="/" />
            <Webworker path="webworker" />
            <RIC path="requestIdleCallback" />
            <TimeSlicing path="timeSlicing" />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
