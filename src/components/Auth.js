import React from 'react'
import { connect } from 'react-redux'
import { login, register } from '../reducers/user'

class Auth extends React.Component {
  state = { password: '', passwordConfirmation: '', email: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { type, dispatch, cb } = this.props
    const creds = this.state
    if (type === 'Register')
      dispatch(register(creds, cb))
    else
      dispatch(login(creds, cb))
  }

  render() {
    const { email, password, passwordConfirmation } = this.state
    const { type } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        {
          type === 'Register' &&
            <input
              type="password"
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={this.handleChange}
              placeholder="Password Confirmation"
            />

        }
        <button>{ type }</button>
      </form>
    )
  }
}

export default connect()(Auth)
