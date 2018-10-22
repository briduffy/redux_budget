const ADD_ENTRY = 'ADD_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'

export const addEntry = (entry) => {
  return { type: ADD_ENTRY, entry }
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

