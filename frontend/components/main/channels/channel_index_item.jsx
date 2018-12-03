import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel, handleClick }) => {
  return (
    <li className="single_channel_text" key={channel.id}>
      <Link to={`${channel.id}`}># {channel.channel_name}</Link>
    </li>
  );
};

export default ChannelIndexItem;
