import React from 'react';
import ServerIndexContainer from './main/servers/servers_index_container';
import ChannelIndexContainer from './main/channels/channels_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/servers' component={ServerIndexContainer}/>
        <Route path='/' component={ServerIndexContainer}/>
        <ProtectedRoute path='/servers/:server_id/channels' component={ChannelIndexContainer} />
      </Switch>
    </div>


  );
};

export default App;
