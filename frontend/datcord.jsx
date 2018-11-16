import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // testing here
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing end here

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

//testing begins here #NOTE
import { login } from './actions/session_actions';
window.login = login;
//testing ends here
