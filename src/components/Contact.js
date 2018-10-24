import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  state = { name: '', email: '', phone: '', body: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/contact', this.state)
      .then( res => {
        alert('Your message has been sent')
        this.setState({ name: '', email: '', phone: '', body: '' })
        this.props.history.push('/')
    })
  }

  render() {
    const { name, email, phone, body } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          required
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
       />
       <input
         placeholder="Phone"
         name="phone"
         value={phone}
         onChange={this.handleChange}
       />
       <textarea 
         required
         value={body} 
         onChange={this.handleChange}
       >
         { body }
       </textarea>
       <button>Submit</button>
     </form>
   )
  }
}

export default Contact
