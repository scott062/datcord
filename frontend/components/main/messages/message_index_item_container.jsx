import { connect } from 'react-redux';
import React from 'react';
import MessageIndexItem from './message_index_item.jsx';

const msp = (state, ownProps) => {
  let user = state.entities.users[ownProps.message.author_id];
  
  return {
    authorName: user.username,
    message: ownProps.message
  }
};

const mdp = dispatch => {
  return {

  }
};

export default connect(msp, mdp)(MessageIndexItem);
