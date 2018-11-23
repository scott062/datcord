import React from 'react';


class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_name: '',
      server_region: 'US EAST',
      admin_id: this.props.admin_id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const serverDetails = Object.assign({}, this.state);
    this.props.processForm(serverDetails).then(this.props.closeModal, this.props.closeModal);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='server_form_div_par'>
        <header className='server_form_header'>
          Create Your Server
        </header>
        <p className='server_form_subhead'>
          By creating a server, you will have access to free text chat to use amongst your friends.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Server Name
            <input
              className='server_name_input'
              type='text'
              value={this.props.server_name}
              onChange={this.update('server_name')} />
          </label>
          <label>
            Server Region
            <input
              className='server_region_input'
              value={this.props.server_region} />
          </label>
          <input
            className='create_server_button'
            type='submit'
            value='Create' />
        </form>
      </div>
    )
  }
}

export default ServerForm;
