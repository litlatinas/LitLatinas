import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import 'normalize.css';

render(
  // <Provider >
  <App />,
  // </Provider>,
  document.getElementById('root')
);
