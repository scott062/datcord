import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import ServerFormContainer from './main/servers/server_form_container';
import ChannelFormContainer from './main/channels/channel_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createServer':
      component= <ServerFormContainer />;
      break;
    case 'createChannel':
      component= <ChannelFormContainer />;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
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
