const ADD_ITEM = 'ADD_ITEM'

export const addItem = (item) => {
  return { type: ADD_ITEM, item }
}

export default ( state = [], action ) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item]
    default:
      return state
  }
}
