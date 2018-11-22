import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../../actions/message_actions';
import MessagesIndex from './messages_index';

const msp = (state) => {
  return {
    messages: state.entities.messages
  }
};

const mdp = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  }
};

export default connect(msp, mdp)(MessagesIndex);
