import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import sessionForm from './session_form';
import { Link } from 'react-router-dom';

const msp = ({ errors }) => {
  return {
    formType: 'signup',
    errors: errors.login,
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(login({ email: "demo@email.com", password: "password"}))
  };
};

export default connect(msp, mdp)(sessionForm);
