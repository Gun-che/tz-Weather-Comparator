import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { Provider } from 'react-redux'
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
