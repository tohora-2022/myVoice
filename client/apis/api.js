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

export function newFavourite (item, token) {
  return request.post(`${rootUrl}` + 'favourites')
    .set('Authorization', `Bearer ${token}`)
    .send(item)
    .then(res => res.body)
    .catch(e => console.log(e))
}

export function addUser (user) {
  return request.post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${user.token}`)
    .send(user)
    .catch(e => console.log(e))
}
