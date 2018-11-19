import React from 'react';
import ServerIndexContainer from './main/servers/servers_index_container';
import ChannelIndexContainer from './main/channels/channels_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainComponent from './main/main';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>

      <Switch>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <Route path='/servers' component={ServerIndexContainer}/>
        <Route exact path='/' component={ServerIndexContainer}/>
        <Route path='/servers/:server_id/:channel_id' component={ChannelIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;
