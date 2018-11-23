import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../util/action_cable_constants';

const Root = ({ store }) => {
  return (
    <ActionCableProvider url={API_WS_ROOT}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ActionCableProvider>
  );
};

export default Root;
