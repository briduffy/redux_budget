//Action Creators
const ADD_ENTRY = 'ADD_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'
const ADD_ITEM = 'ADD_ITEM'

//Actions
const addEntry = (entry) => {
  return { type: ADD_ENTRY, entry }
}

const removeEntry = (index) => {
  return { type: REMOVE_ENTRY, index }
}

const addItem = (item) => {
  return { type: ADD_ITEM, item }
}

//Reducer

const items = ( state = [], action ) => {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, action.item]
    default:
      return state
  }
}

const ledger = (state = [], action) => {
  switch(action.type) {
    case ADD_ENTRY:
      return [...state, action.entry]
    case REMOVE_ENTRY:
      return state.filter( (_, i) => i !== action.index )
    default:
      return state
  }
}

//store
// getState()
// dispatch()
// subscribe()
// replaceReducer()

const { createStore, combineReducers, compose } = Redux

const rootReducer = combineReducers({
  ledger,
  items,
})

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
)

const sumEntries = () => {
  const h1 = document.getElementById('total')
  h1.innerHTML = null
  const { ledger } = store.getState()
  const value = ledger.reduce( (total, entry) => {
    const amt = parseFloat(entry.amt)
    if (entry.type === 'Credit')
      return total + amt
    return total - amt
  }, 0)

  h1.innerHTML = `$${value}`
}

const updateHistory = () => {
  const list = document.getElementById('history')
  const entries = store.getState().ledger
  list.innerHTML = null
  entries.forEach( (entry, index) => {
    const item = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement('button')
    span.innerHTML = `$${entry.amt} - ${entry.description}`
    button.addEventListener('click', () => store.dispatch(removeEntry(index)) )
    button.innerText = 'Remove'
    span.appendChild(button)
    item.appendChild(span)
    item.className = entry.type
    list.append(item)
  })
}

const updateItems = () => {
  const list = document.getElementById('items')
  list.innerHTML = null
  const { items } = store.getState()
  items.forEach( (item) => {
    const li = document.createElement('li')
    li.innerHTML = `$${item.cost} - ${item.description}`
    list.appendChild(li)
  })
}

const formElements = (form) => {
  const obj = {}
  for (let el of form.elements) {
    if (el.name)
      obj[el.name] = el.value
  }

  return obj
}

const handleSubmit = (e) => {
  e.preventDefault()
  const form = e.target
  const obj = formElements(form)

  store.dispatch(addEntry(obj))
  form.reset()
}

const handleItemForm = (e) => {
  e.preventDefault()
  const form = e.target
  const obj = formElements(form)
  store.dispatch(addItem(obj))
  form.reset()
}

const log = () => {
  console.log( store.getState() )
}

store.subscribe(updateHistory)
store.subscribe(sumEntries)
store.subscribe(log)
store.subscribe(updateItems)

document.getElementById('add_entry').addEventListener('submit', handleSubmit)
document.getElementById('add_item').addEventListener('submit', handleItemForm)
