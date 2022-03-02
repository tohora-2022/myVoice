import nock from 'nock'
import { getCategories, getAllItems, addUser, getFavourites, addFavourite, deleteFavourite } from '../api.js'

const testCategories = [
  { id: '1', category: 'testCategory1' },
  { id: '2', category: 'testCategory2' },
  { id: '3', category: 'testCategory3' },
  { id: '4', category: 'testCategory4' },
  { id: '5', category: 'testCategory5' },
  { id: '6', category: 'testCategory6' },
  { id: '7', category: 'testCategory7' }
]

const testItems = [
  { itemId: '1', word: 'testWord1', image: '/images/testCategory1/testImage1.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '2', word: 'testWord2', image: '/images/testCategory1/testImage2.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '3', word: 'testWord3', image: '/images/testCategory1/testImage3.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '4', word: 'testWord4', image: '/images/testCategory1/testImage4.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '5', word: 'testWord5', image: '/images/testCategory1/testImage5.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' }
]

describe('getCategories', () => {
  it('should return categories', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/aac/displays/categories')
      .reply(200, testCategories)

    return getCategories()
      .then(categories => {
        scope.done()
        expect(categories).toEqual(testCategories)
        return null
      })
  })
})

describe('getAllItems', () => {
  it('should return a single categoriesItems', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/aac/displays/items')
      .reply(200, testItems)

    return getAllItems(1)
      .then(items => {
        scope.done()
        expect(items).toEqual(testItems)
        return null
      })
  })
})

describe('addUser', () => {
  it('should add a new user from auth0', () => {
    const scopedUser = {
      auth0Id: 'auth|6453',
      email: 'thatsme@gmail.com'
    }
    const scope = nock('http://localhost')
      .post('/api/v1/aac/users')
      .reply(200)

    expect.assertions(1)
    return addUser(scopedUser)
      .then(res => {
        scope.done()
        expect(res.statusCode).toBe(200)
        return null
      })
  })
})

describe('getFavourites', () => {
  const fakeFav = [{ itemId: 101, word: 'me', image: 'http://here.co' }, { itemId: 52, word: 'hello', image: 'http://hello.co' }]
  const token = 1234

  it('gets all favourites with GET /api/v1/aac/users/favourites', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/aac/users/favourites')
      .reply(200, fakeFav)

    expect.assertions(2)
    return getFavourites(token)
      .then(res => {
        scope.done()
        expect(res).toEqual(fakeFav)
        expect(res).toHaveLength(2)
        return null
      })
  })
})

describe('addFavourite', () => {
  const fakeFav = [{ userId: 9000, itemId: 3 }]
  const token = 1234

  it('create a new favourite with POST /api/v1/aac/users/add-favourite', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/aac/users/add-favourite')
      .reply(200, fakeFav)

    expect.assertions(1)
    return addFavourite(fakeFav, token)
      .then(res => {
        scope.done()
        expect(res.statusCode).toBe(200)
        return null
      })
  })
})

describe('deleteFavourite', () => {
  const fakeFav = [{ userId: 9000, itemId: 3 }]
  const token = 1234

  it('delete a favourite with DELETE /api/v1/aac/users/remove-favourite', () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/aac/users/remove-favourite')
      .reply(200, fakeFav)

    expect.assertions(1)
    return deleteFavourite(fakeFav, token)
      .then(res => {
        scope.done()
        expect(res).toEqual(fakeFav)
        return null
      })
  })
})
