import { SET_CATEGORY } from '../actions'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.categoryId
    default:
      return state
  }
}

export default reducer
