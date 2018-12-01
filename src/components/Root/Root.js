import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import NotFound from '../NotFound/NotFound';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;