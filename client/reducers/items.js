import { DISPLAY_ITEMS } from '../actions/category'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ITEMS:
      return action.items
    default:
      return state
  }
}

export default reducer
