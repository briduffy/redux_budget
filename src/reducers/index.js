import { combineReducers } from 'redux'
import ledger from './ledger'
import items from './items'
import users from './users'

export default combineReducers({
  ledger,
  items,
  users,
})
