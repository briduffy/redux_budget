import axios from 'axios'

const ENTRIES = 'ENTRIES'
const ADD_ENTRY = 'ADD_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'


export const getEntries = () => {
  return (dispatch) => {
    axios.get('/api/entries')
      .then(res => dispatch({ type: ENTRIES, entries: res.data }))
  }
}

export const addEntry = (entry) => {
  return (dispatch) => {
    axios.post('/api/entries', {entry})
    .then( res => dispatch({ type: ADD_ENTRY, entry }))
  }   
}

export const removeEntry = (index) => {
  return { type: REMOVE_ENTRY, index }
}

export default ( state = [], action ) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.entry]
    case REMOVE_ENTRY:
      return state.filter( (_,i) => i !== action.index )
    default:
      return state
  }
}

