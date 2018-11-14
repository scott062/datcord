import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import sessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state) => {
  return {
    formType: 'login',
    errors: state.errors,
  }
};

const mdp = (dispatch) => {
  return {
    formAction: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(sessionForm);
