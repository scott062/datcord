import React from 'react';
import ServersIndexContainer from './servers/servers_index_container';
import ChannelsContainer from './channels/channels_container';
import MessagesContainer from './messages/messages_container';
import MembersContainer from './members/members_container';


export default (props) => {
  debugger
  return (
    <div className='main'>
      <ServersIndexContainer />
      <ChannelsContainer />
      <MessagesContainer />
      <MembersContainer />
    </div>
  )
}
