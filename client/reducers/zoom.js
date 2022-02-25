import { SET_ZOOM } from '../actions/zoom'

const initialState = 'medium'

export default function zoomReducer (state = initialState, action) {
  switch (action.type) {
    case SET_ZOOM:
      return action.change
    default:
      return state
  }
}
