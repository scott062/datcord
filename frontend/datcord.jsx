import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Datcord</h1>, root);
});

//testing begins here
import * as SessionApiUtil from './util/session_api_util';

window.login = SessionApiUtil.login;
window.signup = SessionApiUtil.signup;
window.logout = SessionApiUtil.logout;
//testing ends here
