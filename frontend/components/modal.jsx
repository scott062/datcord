import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component; //this will be changed based on the case statement
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />
      break; //what is this doing?
    case 'signup':
      component = <SignupFormContainer />
      break;

    default:
      return null;
  } //if you make it to the next return then you got a modal and a comp
  return (
    <div class="modal-background" onClick={closeModal}>
      <div class="modal-child" onClick={e => e.stopPropagation()}> //wtf is this?
        { component }
      </div>
    </div>
  )
}

const msp = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
