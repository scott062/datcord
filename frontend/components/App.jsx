import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Modal />
      <header>DATCORD</header>
      <Switch>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
