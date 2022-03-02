const request = require('supertest')
const server = require('../../server')

const checkJwt = require('../../auth0')
const userDb = require('../../db/users')
const favDb = require('../../db/favourites')

jest.mock('../../db/users')
jest.mock('../../auth0')
jest.mock('../../db/favourites')

// const testUsers = [
//   { id: 1001, auth0_id: 'auth|123', email: 'monkey@gmail.com' },
//   { id: 1002, auth0_id: 'auth|456', email: 'myhands@gmail.com' }
// ]

// const testFavourites = [
//   { id: 901, users_id: 1001, items_id: 4 },
//   { id: 901, users_id: 1001, items_id: 5 },
//   { id: 901, users_id: 1001, items_id: 6 },
//   { id: 902, users_id: 1002, items_id: 1 },
//   { id: 902, users_id: 1002, items_id: 2 },
//   { id: 902, users_id: 1002, items_id: 3 }
// ]

beforeEach(() => jest.clearAllMocks())

describe('POST user', () => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = {
      sub: 'auth|123'
    }
    next()
  })
  const testUserRequest = { email: 'testEmail' }
  it('can get an existing user', () => {
    userDb.userExists.mockReturnValue(Promise.resolve(true))
    // userDb.createUser.mockReturnValue(Promise.resolve(false))
    expect.assertions(1)
    return request(server)
      .post('/api/v1/aac/users')
      .send(testUserRequest)
      .then(res => {
        expect(res.status).toBe(200)
        return null
      })
  })
  it('can get an create a user', () => {
    userDb.userExists.mockReturnValue(Promise.resolve(false))
    // userDb.createUser.mockReturnValue(Promise.resolve(false))
    expect.assertions(1)
    return request(server)
      .post('/api/v1/aac/users')
      .send(testUserRequest)
      .then(res => {
        expect(res.status).toBe(201)
        return null
      })
  })
})

describe('GET user favourites', () => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = {
      sub: 'auth|123'
    }
    next()
  })
  it('gets favourites for user', () => {
    userDb.findUserId.mockReturnValue(Promise.resolve([{ id: 1001 }]))
    favDb.getAllFavourites.mockReturnValue(Promise.resolve([
      { id: 901, users_id: 1001, items_id: 4 },
      { id: 901, users_id: 1001, items_id: 5 },
      { id: 901, users_id: 1001, items_id: 6 }
    ]))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/aac/users/favourites')
      .then(res => {
        expect(res.body).toHaveLength(3)
        expect(res.body[0].items_id).toBe(4)
        return null
      })
  })

  it('returns 500 if hits an error', () => {
    console.log = jest.fn()
    userDb.findUserId.mockReturnValue(Promise.resolve([{ id: 1001 }]))
    favDb.getAllFavourites.mockImplementation(() => Promise.reject(new Error('DB error')))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/aac/users/favourites')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('POST /api/va/aac/users/add-favourite', () => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = {
      sub: 'auth|123'
    }
    next()
  })
  it('adds favourite to users', () => {
    const item = { id: 907, user_id: 1002, items_id: 54 }
    favDb.favouriteExists.mockReturnValue(Promise.resolve(false))
    favDb.addFavourite.mockImplementation(Promise.resolve(item))
    expect.assertions(2)
    return request(server)
      .post('/api/v1/aac/users/add-favourite')
      .send(item)
      .then(res => {
        expect(favDb.addFavourite).toHaveBeenCalledTimes(1)
        expect(favDb.addFavourite).toHaveBeenCalledWith(expect.anything(), item)
        return null
      })
  })
})

describe('DEL /api/va/aac/users/remove-favourite', () => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = {
      sub: 'auth|123'
    }
    next()
  })
  it('deletes favourite for a user', () => {
    const item = '{ id: 907, user_id: 1002, items_id: 54 }'
    const resItems = '{ item1: { id: 907, user_id: 1002, items_id: 54 } }'
    const userId = 1002
    userDb.findUserId.mockReturnValue(Promise.resolve([{ id: 1002 }]))
    favDb.deleteFavourite.mockReturnValue(Promise.resolve([1]))
    favDb.getAllFavourites.mockReturnValue(Promise.resolve(resItems))
    expect.assertions(4)
    return request(server)
      .delete('/api/v1/aac/users/remove-favourite')
      .send({ item: '{ id: 907, user_id: 1002, items_id: 54 }' })
      .then(res => {
        expect(favDb.deleteFavourite).toHaveBeenCalledTimes(1)
        expect(favDb.getAllFavourites).toHaveBeenCalledTimes(1)
        expect(favDb.deleteFavourite).toHaveBeenCalledWith(userId, item)
        expect(res.body).toBe(resItems)
        return null
      })
  })
})
