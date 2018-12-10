import React from 'react';
import { API_ROOT, HEADERS } from '../../../util/action_cable_constants';
import { merge } from 'lodash';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const messageDetails = {
      author_id: this.props.author_id,
      channel_id: this.props.channel_id,
      channel_type: this.props.channel_type,
      body: this.state.body,
    };
    this.props.processForm(messageDetails);
    this.setState({body: ''});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='message_form_div_par'>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className='body_input'
            type='text'
            value={this.state.body}
            placeholder='Type Message to Channel Here'
            onChange={this.update('body')} />
          <button
            className='create_message_button'
            type='submit'
            value='Create Message'><div className='plus_button_message'>+</div>
          </button>
        </form>
      </div>
    )
  }
}

export default MessageForm;
