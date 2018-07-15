import React from 'react';
import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  Link,
} from 'react-router-dom';

import Chat from './components/Chat/index.jsx';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';

const Routes = () => (
  <Router history={hashHistory}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/chat" component={Chat} />
    </div>
  </Router>
);

export default Routes;
