import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then( (res) => {
    return (dispatch(receiveCurrentUser(res)))
  });
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then( (res) => {
    return (dispatch(logoutCurrentUser(res)))
  });
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then( (res) => {
    return (dispatch(receiveCurrentUser(res)))
  });
};


export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
