import { SET_CATEGORY, CLEAR_CATEGORY } from '../actions'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.categoryId
    case CLEAR_CATEGORY:
      return ''
    default:
      return state
  }
}

export default reducer
