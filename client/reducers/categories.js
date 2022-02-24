import { DISPLAY_CATEGORIES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CATEGORIES:
      return action.categories.slice(0, -1)
    default:
      return state
  }
}

export default reducer
