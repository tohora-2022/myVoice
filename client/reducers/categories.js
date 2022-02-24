import { DISPLAY_CATEGORIES } from '../actions/category'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export default reducer
