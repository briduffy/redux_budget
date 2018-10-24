import axios from 'axios'

const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const LOGOUT = 'LOGOUT'

export const login = (credentials, cb) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', credentials)
     .then( res => {
       dispatch({ type: LOGIN, user: res.data.data })
       cb()
    })
  }
}

export const register = (credentials, cb) => {
  return (dispatch) => {
    axios.post('/api/auth', credentials)
     .then( res => {
       dispatch({ type: REGISTER, user: res.data.data })
       cb()
     })
  }
}

export const logout = (cb = f => f) => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( () => {
         dispatch({ type: LOGOUT })
         cb() 
      })
  }
}

export default ( state = {}, action ) => {
  switch (action.type) {
    case LOGIN:
      return action.user
    case REGISTER:
      return action.user
    case LOGOUT:
      return {}
    default:
      return state
  }
}
