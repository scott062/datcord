import React from 'react';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.author_id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.processForm(message);
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
            placeholder='Type Message to Channel Here'
            onChange={this.update('body')} />
          <button
            className='create_message_button'
            type='submit'
            value='Create'><div className='plus_button_message'>+</div></button>
        </form>
      </div>
    )
  }
}

export default MessageForm;
