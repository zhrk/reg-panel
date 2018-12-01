import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import './index.css';
import Root from './components/Root/Root';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

serviceWorker.unregister();