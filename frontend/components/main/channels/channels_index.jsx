import React from 'react';
import { Route } from 'react-router-dom';


import MessagesIndexContainer from '../messages/messages_index_container';
import ChannelIndexItem from './channel_index_item';

class ChannelsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchServer(this.props.match.params.serverId);
    }
  }

  render() {
    const { channels, server, currentUser } = this.props;
    if (!server || !currentUser) return null;
    return (
      <>
      <Route path='channels/:channelId'
        component={MessagesIndexContainer}/>
      <div className="channels_container">
        <div className='channels_header_parent'>
          <span className='channels_servername_header'>{this.props.server.server_name}</span>
        </div>
        <div className='text_channels_head_parent'>
          <span className='text_channels_header'>TEXT CHANNELS</span>
        </div>
        <ul className='channels_ul'>
          {channels.map(channel => (
            <ChannelIndexItem
              key={channel.id}
              channel={channel} />
            )
          )}
        </ul>
        <div className='user_profile'>
          <img src={currentUser.photo_url} />
          <span>{currentUser.username}</span>
          <button className='logout_button' onClick={this.props.logout}>Logout</button>
        </div>
      </div>
      </>
    )
  }
}

export default ChannelsIndex;
