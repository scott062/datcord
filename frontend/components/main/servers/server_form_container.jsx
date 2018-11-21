import { connect } from 'react-redux';
import React from 'react';
import { createServer } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ServerForm from './server_form.jsx';

const msp = (state) => {
  return {
    formType: 'createServer',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (serverDetails) => dispatch(createServer(serverDetails)),
    otherForm: (
      <button onClick={() => dispatch(openModal('createServer'))}>
        Create Server
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(ServerForm);
