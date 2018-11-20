import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => {
  return (
    <li>
      <span>{channel.channel_name}</span>
    </li>
  );
};

export default ChannelIndexitem;
