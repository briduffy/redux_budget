import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
`

const calcTotal = (ledger) => {
  return ledger.reduce( (total, entry) => {
    const amt = parseFloat(entry.amt)
    if (entry.type === 'Debit')
      return total - amt
    return total + amt
  }, 0)
}

const Transactions = ({ ledger }) => (
  <Fragment>
    <h1>Ledger</h1>
    <h4>Balance ${ calcTotal(ledger) }</h4>
    <List>
      { ledger.map( (entry, i) => <Transaction key={i} index={i} {...entry} /> ) }
    </List>
  </Fragment>
)

const mapStateToProps = (state) => {
  return { ledger: state.ledger }
}

export default connect(mapStateToProps)(Transactions)
