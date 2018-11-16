import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import sessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    formType: 'login',
    errors: errors.login,
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login({ email: "demo@email.com", password: "password"}))
  };
};

export default connect(msp, mdp)(sessionForm);
