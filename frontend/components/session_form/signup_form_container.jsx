import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import sessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = ({ errors }) => {
  return {
    formType: 'signup',
    errors: errors.login
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(sessionForm);
