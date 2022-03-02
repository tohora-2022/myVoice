import { SET_ZOOM } from '../actions'

const initialState = { width: '130', spacing: 10 }

export default function zoomReducer (state = initialState, action) {
  switch (action.type) {
    case SET_ZOOM:
      return action.change
    default:
      return state
  }
}
