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
  type,
  amt,
  description,
  index,
  dispatch,
}) => (
  <Item type={type}>
    ${amt}
    { description && ` - ${description}` }
    <DeleteButton
      onClick={() => dispatch(removeEntry(index))}
    >
      Remove
    </DeleteButton>
  </Item>
)

export default connect()(Transaction)
