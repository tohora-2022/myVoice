import request from 'superagent'

const rootUrl = '/api/v1/aac'

export function getCategories () {
  return request.get(rootUrl + '/displays/categories')
    .then(res => res.body)
}

export function getAllItems () {
  return request.get(rootUrl + '/displays/items')
    .then(res => res.body)
}

export function addUser (user) {
  return request.post(rootUrl + '/users')
    .set('Authorization', `Bearer ${user.token}`)
    .send(user)
}

export function getFavourites (token) {
  return request.get(rootUrl + '/users/favourites')
    .set('Authorization', `Bearer ${token}`)
    .then(res => res.body)
}

export function addFavourite (item, token) {
  return request.post(rootUrl + '/users/add-favourite')
    .set('Authorization', `Bearer ${token}`)
    .send({ item })
}

export function deleteFavourite (item, token) {
  return request.delete(rootUrl + '/users/remove-favourite')
    .set('Authorization', `Bearer ${token}`)
    .send({ item })
    .then(res => res.body)
}
