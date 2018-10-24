import React from 'react'
import Items from './Items'
import { connect }  from 'react-redux'
import { getItems } from '../reducers/items'

class WishList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getItems())
  }

  render() {
    return (
      <div>
        <Items />
      </div>
    )
  }
}

export default connect()(WishList)
