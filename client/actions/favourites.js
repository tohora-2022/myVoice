export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const SET_USER_FAVOURITES = 'SET_USER_FAVOURITE'

export function userFavourites (favourites) {
  return {
    type: SET_USER_FAVOURITES,
    favourites
  }
// User interaction not yet implemented
// export function addFavourite (item, token) {
//   return dispatch => {
//     return newFavourite(item, token)
//       .then(favourites => {
//         dispatch(userFavourites(favourites))
//         return null
//       })
//   }
}
