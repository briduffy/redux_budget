import { combineReducers } from 'redux'
import ledger from './ledger'
import items from './items'

export default combineReducers({
  ledger,
  items,
})
