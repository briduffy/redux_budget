import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../reducers/ledger'
import {
  Input,
  Button,
  Flex,
  FormBox,
} from './Shared'

class LedgerForm extends React.Component {
  defaultState = {
    amt: '',
    description: '',
    entry_type: 'Debit',
  }

  state = this.defaultState

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(addEntry(this.state))
    this.setState(this.defaultState)
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { amt, description, entry_type } = this.state
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <Flex
          alignItems="stretch"
          direction="column"
        >
          <Input
            type="number"
            min="0"
            name="amt"
            value={amt}
            onChange={this.handleChange}
            placeholder="Amt"
            required
          />
          <Input
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <select
            name="entry_type"
            onChange={this.handleChange}
            value={entry_type}
          >
            <option>Debit</option>
            <option>Credit</option>
          </select>
          <Button>Add Item</Button>
        </Flex>
      </FormBox>
    )
  }
}

export default connect()(LedgerForm)
