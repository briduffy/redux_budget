import React, { Fragment } from 'react'
import LedgerForm from './LedgerForm'
import Transactions from './Transactions'

const Ledger = () => (
  <Fragment>
    <LedgerForm />
    <Transactions />
  </Fragment>
)
export default Ledger
