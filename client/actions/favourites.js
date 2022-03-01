import { addFavourite, getFavourites, deleteFavourite } from '../apis/api'

export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const SET_FAVOURITES = 'SET_FAVOURITES'

export function includeFavourite (favourite) {
  return {
    type: ADD_FAVOURITES,
    favourite
  }
}

export function userFavourites (favourites) {
  return {
    type: SET_FAVOURITES,
    favourites
  }
}

export function fetchFavourites (token) {
  return dispatch => {
    return getFavourites(token)
      .then(favourites => {
        dispatch(userFavourites(favourites))
        return null
      })
  }
}

export function newFavourite (item, token) {
  return dispatch => {
    return addFavourite(item, token)
      .then(favourites => {
        dispatch(includeFavourite(favourites))
        return null
      })
  }
}

export function removeFavourite (item, token) {
  return dispatch => {
    return deleteFavourite(item, token)
      .then(favourites => {
        dispatch(userFavourites(favourites))
        return null
      })
  }
}
