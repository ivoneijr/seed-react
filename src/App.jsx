import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Routes from './routes.jsx';

const App = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;

App.propTypes = {
  store: PropTypes.object,
};
