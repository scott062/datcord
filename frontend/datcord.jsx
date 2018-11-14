import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

//testing begins here
import { login } from './actions/session_actions';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;
window.login = login;
//testing ends here
