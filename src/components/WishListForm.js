import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../reducers/items'
import {
  Input,
  Button,
  Flex,
  FormBox,
} from './Shared'

class WishListForm extends React.Component {
  defaultState = {
    cost: '',
    description: '',
    item_type: 'Want',
  }

  state = this.defaultState

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(addItem(this.state))
    this.setState(this.defaultState)
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { cost, description, item_type } = this.state
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <Flex
          alignItems="stretch"
          direction="column"
        >
          <Input
            type="number"
            min="0"
            name="cost"
            value={cost}
            onChange={this.handleChange}
            placeholder="Cost"
            required
          />
          <Input
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <select
            name="item_type"
            onChange={this.handleChange}
            value={item_type}
          >
            <option>Want</option>
            <option>Need</option>
          </select>
          <Button>Add Item</Button>
        </Flex>
      </FormBox>
    )
  }
}

export default connect()(WishListForm)
