import React from 'react';
import { connect } from 'react-redux';
import ServerIndex from './servers_index';
import { fetchServers } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const msp = (state) => {


  return {
    servers: state.entities.servers,
  }
};

const mdp = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (id) => dispatch(fetchServer(id)),
  }
};

export default connect(msp, mdp)(ServerIndex);
