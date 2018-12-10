import React from 'react';
import MessageFormContainer from './message_form_container';
import MessageIndexItemContainer from './message_index_item_container';

class MessagesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannel(this.props.current_server, this.props.match.params.channelId);
  }

  render() {
    let { messages } = this.props
    if (!messages) return null;

    messages = (Object.values(messages).map(message =>
      <MessageIndexItemContainer key={message.id} message={message} />
    ))
    return (
      <div className='message_parent_div'>
        <div className='message_header_parent'>
          <span>
            <img src='hashtag-solid.svg'/>
            {this.props.channelName}
          </span>
        </div>
        <ul className='messages_ul'>{messages}</ul>
        <MessageFormContainer channel={this.props.match.params.channelId}/>
      </div>

    )
  }
}

export default MessagesIndex;
