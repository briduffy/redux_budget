import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'

const Transactions = ({ledger}) => (
  <Fragment>
    <h4>Ledger</h4>
    <h4>Balance: {ledger.reduce( (t, e) => t + parseFloat(e.amt), 0 )}</h4>
    {ledger.map( (entry, i) => <Transaction key={i} {...entry}/> )}
  </Fragment>

)

const mapStateToProps = (state) => {
  return {ledger: state.ledger }
}

export default connect(mapStateToProps)(Transactions)
