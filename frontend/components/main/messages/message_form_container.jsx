import { connect } from 'react-redux';
import React from 'react';
import { createMessage } from '../../../actions/message_actions';
import MessageForm from './message_form.jsx';

const msp = (state, ownProps) => {
  return {
    formType: 'createMessage',
    author_id: state.session.current_user_id,
    channel_id: state.ui.current_channel_id,
    channel_type: 'Channel',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (message) => dispatch(createMessage(message)),
  };
};

export default connect(msp, mdp)(MessageForm);
