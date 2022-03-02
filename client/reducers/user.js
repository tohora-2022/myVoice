import { SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = {
  auth0Id: null,
  email: null,
  token: null
}

export default function user (state = emptyUser, action) {
  console.log('action', action)
  switch (action.type) {
    case SET_USER:
      return action.user
    case CLEAR_USER:
      return emptyUser
    default:
      return state
  }
}
