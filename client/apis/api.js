import request from 'superagent'

const rootUrl = '/api/v1/aac'

export function getCategories () {
  return request.get(rootUrl + '/categories')
    .then(res => res.body)
}

export function getAllItems () {
  return request.get(rootUrl + '/items')
    .then(res => res.body)
}

export async function addUser (user) {
  return request.post(`${rootUrl}/users`)
  .send(user)
  .catch(e => console.log(e))
}
