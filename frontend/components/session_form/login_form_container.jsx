import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import sessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    formType: 'login',
    errors: errors.login,
    navLink: <div className="navLink"><p>Need an account?</p><Link to='/signup'>Register</Link></div>,
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(sessionForm);
