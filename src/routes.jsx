import React from 'react';
import {
  BrowserRouter as Router,
  hashHistory,
  Route,
} from 'react-router-dom';

import Chat from './components/Chat/index.jsx';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';
import Menu from './components/Menu/index.jsx';

const Routes = () => (
  <Router history={hashHistory}>
    <div>
      <Menu />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/chat" component={Chat} />
    </div>
  </Router>
);

export default Routes;
