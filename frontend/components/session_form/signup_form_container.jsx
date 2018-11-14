import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import sessionForm from './session_form';


const msp = (state) => {
  return {
    formType: 'signup',
    errors: state.errors,
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(signup(user)),
  }
};

export default connect(msp, mdp)(sessionForm);
