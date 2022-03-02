const request = require('supertest')
const server = require('../../server')

const checkJwt = require('../../auth0')
const userDb = require('../../db/users')
const favDb = require('../../db/favourites')

jest.mock('../../db/users')
jest.mock('../../auth0')
jest.mock('../../db/favourites')

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

// On hold as id doesn't recognise req.body.item on line 43
// ('POST /api/va/aac/users/add-favourite', () => {
//   checkJwt.mockImplementation((req, res, next) => {
//     req.user = {
//       sub: 'auth|123'
//     }
//     next()
//   })
//   ('adds favourite to users', () => {
//     const item = { id: 907, user_id: 1002, items_id: 54 }
//     favDb.favouriteExists.mockReturnValue(Promise.resolve(false))
//     favDb.addFavourite.mockImplementation(Promise.resolve(item))
//     expect.assertions(2)
//     return request(server)
//       .post('/api/v1/aac/users/add-favourite')
//       .send(item)
//       .then(res => {
//         expect(favDb.addFavourite).toHaveBeenCalledTimes(1)
//         expect(favDb.addFavourite).toHaveBeenCalledWith(expect.anything(), item)
//         return null
//       })
//   })
// })
