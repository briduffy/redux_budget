import React from 'react'
import Ledger from './Ledger'
import WishList from './WishList'
import LedgerForm from './LedgerForm'
import WishListForm from './WishListForm'
import { Flex } from './Shared'

const App = () => (
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

export default App

