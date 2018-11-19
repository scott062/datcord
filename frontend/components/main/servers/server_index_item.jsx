import React from 'react';
import { Link } from 'react-router-dom';
import { fetchServer } from '../../../actions/server_actions';

export default ({server}) => {
  return (
    <li className="serverIndexItem">
      <Link to={`/servers/${server.id}/channels`}>
        <img src={server.photo_url} alt="" title={server.server_name}/>
      </Link>
    </li>
  );
};
