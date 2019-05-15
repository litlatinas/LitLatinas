import React from 'react';
import { render, Provider } from 'react-dom';
import App from './components/app/App';
import store from './store';
import 'normalize.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
