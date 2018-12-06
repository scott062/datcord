import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
          <Component {...props} />
        ) : (

          <Redirect to='/servers' />
        )
      )}/>
  );
};

const Protected = ({ component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      )}/>
  );
};


const msp = (state) => {

  // let server_id = Object.values(state.entities.users)[0].server_memberships[0]
  return {
    loggedIn: Boolean(state.session.current_user_id),
    // general: `/${server_id}/`,
  };
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
