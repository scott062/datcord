import React from 'react';
import { connect } from 'react-redux';

import { fetchServer } from '../../../actions/server_actions';
import MembersIndex from './members_index';

const msp = (state) => {
  let members = Object.values(state.entities.users);
  let currentServer = state.ui.current_server;
  members = members.filter( member => member.server_memberships.includes(currentServer));
  return {
    members: members,
  };
};

const mdp = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
  };
};

export default connect(msp, mdp)(MembersIndex);
