import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.formAction(user)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  isSignup() {
    if (this.props.formType === 'signup') {
      return (
          <label>
            USERNAME
            <input
              class="session-input"
              type='text'
              value={this.props.username}
              onChange={this.update('username')}
            />
          </label>
      )
    }
  }

  renderErrors () {
    return (
      <ul>
      {this.props.errors.map( (error, i) => (
        <li key={`${i}`}>{error}</li>
      ))}
      </ul>
    )
  }

  render () {
    return (
      <div class="session-form-container">

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <label>
            EMAIL
            <input
              class="session-input"
              type='text'
              value={this.props.email}
              onChange={this.update('email')}
            />
          </label>
          {this.isSignup()}
          <label>
            PASSWORD
            <input
              class="session-input"
              type='password'
              value={this.props.password}
              onChange={this.update('password')}
            />
          </label>
          <input
            type="submit"
            value={this.props.formType}
          />
          {this.props.navLink}
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
