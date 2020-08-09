import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './client/store';
import App from './client/App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
