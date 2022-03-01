import { ADD_FAVOURITES } from '../actions'

const initialState = []

export default function favouritesReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
      return [...state, action.favourites]
    default:
      return state
  }
}
