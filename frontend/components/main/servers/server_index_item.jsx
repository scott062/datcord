import React from 'react';
import { Link } from 'react-router-dom';

export default ({server}) => {
  return (
    <li className="serverIndexItem">
      <img src={server.photo_url} alt="" title={server.server_name} />
      <span className='serverLabel'>{server.server_name}</span>
    </li>
  );
};
