import { connect } from 'react-redux';
import React from 'react';
import { createMessage } from '../../../actions/message_actions';
import MessageForm from './message_form.jsx';

const msp = (state, ownProps) => {
  return {
    formType: 'createMessage',
    author_id: state.session.currentUserId,
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (channel_id, message) => dispatch(createMessage(channel_id, message)),
  };
};

export default connect(msp, mdp)(MessageForm);
