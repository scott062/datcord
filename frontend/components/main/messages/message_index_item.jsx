import React from 'react';

class MessageIndexItem extends React.Component {
  render() {
    let message = this.props.message;
    let name = this.props.authorName;
    return (
      <li key={message.id}>
        <span>{message.created_at.slice(11, 16)} </span><span className='message_username'>{name} </span>
        <span className='message_body'>{message.body}</span>
      </li>
    )
  }
}


export default MessageIndexItem;
