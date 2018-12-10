import React from 'react';
import { Provider } from 'react-redux';
import Home from '../../containers/Home/Home';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default Root;