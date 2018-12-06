import { connect } from 'react-redux';
import React from 'react';
import { createServer } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ServerForm from './server_form.jsx';

const msp = (state) => {
  return {
    formType: 'createServer',
    admin_id: state.session.current_user_id,
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (serverDetails) => dispatch(createServer(serverDetails)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(ServerForm);
