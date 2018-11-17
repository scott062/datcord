import React from 'react';
import ServersContainer from './servers/servers_container';
import ChannelsContainer from './channels/channels_container';
import MessagesContainer from './messages/messages_container';
import MembersContainer from './members/members_container';


export default () => {
  return (
    <div className='main'>
      <ServersContainer />
      <ChannelsContainer />
      <MessagesContainer />
      <MembersContainer />
    </div>
  )
}
