import React from 'react'
import Ledger from './Ledger'
import WishList from './WishList'
import LedgerForm from './LedgerForm'
import WishListForm from './WishListForm'
import { Flex } from './Shared'
import { connect } from 'react-redux'
import { getEntries } from '../reducers/ledger'

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    return (
      <div>
        <Flex alignItems="stretch">
          <LedgerForm />
          <WishListForm />
        </Flex>
        <Flex justifyContent="space-around">
          <Ledger />
          <WishList />
        </Flex>
      </div>
    )
  }
}

export default connect()(Home)
