import { addUser } from '../apis/api'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export function handleLogin (user) {
  return async (dispatch) => {
    try {
      await addUser(user)
      dispatch(setUser(user))
    } catch (err) {
      dispatch(clearUser())
    }
  }
}
