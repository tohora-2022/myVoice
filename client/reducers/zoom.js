import { SET_ZOOM } from '../actions'

const initialState = '130'

export default function zoomReducer (state = initialState, action) {
  switch (action.type) {
    case SET_ZOOM:
      return action.change
    default:
      return state
  }
}
