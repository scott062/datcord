import { connect } from 'react-redux';
import React from 'react';
import { createMessage } from '../../../actions/message_actions';
import MessageForm from './message_form.jsx';

const msp = (state, ownProps) => {
  return {
    formType: 'createMessage',
    author_id: state.session.currentUserId,
    channel_id: state.entities.current_channel,
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (message) => dispatch(createMessage(message)),
  };
};

export default connect(msp, mdp)(MessageForm);
