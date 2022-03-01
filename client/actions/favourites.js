import { addFavourite } from '../apis/api'

export const ADD_FAVOURITES = 'ADD_FAVOURITES'

export function userFavourites (favourites) {
  return {
    type: ADD_FAVOURITES,
    favourites
  }
}

export function newFavourite (item, token) {
  return dispatch => {
    return addFavourite(item, token)
      .then(favourites => {
        dispatch(userFavourites(favourites))
        return null
      })
  }
}
