import { SET_OUTPUT_ITEMS } from '../actions'

const initialState = []

export default function outputReducer (state = initialState, action) {
  switch (action.type) {
    case SET_OUTPUT_ITEMS:
      return [...state, action.item]
    default:
      return state
  }
}
