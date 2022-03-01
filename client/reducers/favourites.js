import { ADD_FAVOURITES, SET_FAVOURITES } from '../actions'

const initialState = []

export default function favouritesReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FAVOURITES:
      return action.favourites
    case ADD_FAVOURITES:
      return [...state, action.favourite]
    default:
      return state
  }
}
