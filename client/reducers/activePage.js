import { SET_ACTIVE_PAGE } from '../actions/activePage'

const initialState = 'home'

export default function activePageReducer (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return action.page
    default:
      return state
  }
}
