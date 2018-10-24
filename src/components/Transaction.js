import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { removeEntry } from '../reducers/ledger'
import { Button } from './Shared'

const Item = styled.li`
  background-color: ${ props => props.type === 'Debit' ? props.theme.red : props.theme.green };
  display: flex;
  justify-content: space-between;
`
const DeleteButton = styled(Button)`
  background-color: black;
  color: white;
`

const Transaction = ({ 
  entry_type,
  amt,
  description,
  id,
  dispatch,
}) => (
  <Item type={entry_type}>
    ${amt}
    { description && ` - ${description}` }
    <DeleteButton
      onClick={() => dispatch(removeEntry(id))}
    >
      Remove
    </DeleteButton>
  </Item>
)

export default connect()(Transaction)
