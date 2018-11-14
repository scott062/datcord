import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Datcord</h1>, root);
});

//testing begins here
import * as SessionApiUtil from './util/session_api_util';
const store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;
window.login = SessionApiUtil.login;
window.signup = SessionApiUtil.signup;
window.logout = SessionApiUtil.logout;
//testing ends here
