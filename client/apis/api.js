import request from 'superagent'

const rootUrl = '/api/v1/aac'

export function getCategories () {
  return request.get(rootUrl + '/categories')
    .then(res => res.body)
}

export function getItems (id) {
  return request.get(rootUrl + `/${id}`)
    .then(res => res.body)
}
