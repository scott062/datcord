import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import sessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    formType: 'signup',
    errors: errors.login,
    navLink: <Link to='/login'>Already have an account?</Link>,
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(sessionForm);
