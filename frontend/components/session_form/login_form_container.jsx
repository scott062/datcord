import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import sessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    formType: 'login',
    errors: errors.login
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(sessionForm);
