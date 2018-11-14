import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    return (e) => this.state.formAction(e)
  }

  update(field) {
    e.preventDefault();
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  isSignup() {
    if (this.state.formType === 'signup') {
      return (
        <div>

          <label>
            EMAIL
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>

          <label>
            PROFILE IMAGE URL
            <input
              type='text'
              value={this.state.avatar_url}
              onChange={this.update('avatar_url')}
            />
          </label>

        </div>
      )
    }
  }

  renderErrors () {
    return (
      <ul>
      this.state.errors.map{ (error, i) => (
        <li key={`${i}`}>{error}</li>
      )}
      </ul>
    )
  }

  render () {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>

          <label>
            USERNAME
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          <label>
            PASSWORD
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          {this.isSignup}

        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
