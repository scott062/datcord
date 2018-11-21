import React from 'react';
import { Link } from 'react-router-dom';
import ChannelIndexContainer from '../channels/channels_container';

export default ({server}) => {
  return (
    <li className="serverIndexItem">
      <Link to={`/servers/${server.id}/`}>
        <img src={server.photo_url} alt={server.server_name} title={server.server_name}/>
      </Link>
    </li>
  );
};
