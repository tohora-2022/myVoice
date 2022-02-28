const request = require('supertest')
const server = require('../../server')
// const db = require('../../db/db')

const { getCategories, getItems } = require('../../db/db')

jest.mock('../../db/db')

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

beforeEach(() => jest.clearAllMocks())

describe('GET /api/v1/aac/categories', () => {
  test('returns categories from database.', () => {
    getCategories.mockReturnValue(Promise.resolve(testCategories))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/aac/categories')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(testCategories)
        return null
      })
  })

  test('returns 500 if hits an error', () => {
    getCategories.mockImplementation(() => Promise.reject(new Error('Database Error')))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/aac/categories')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('GET /api/v1/aac/:categoryId', () => {
  test('returns items from database.', () => {
    getItems.mockReturnValue(Promise.resolve(testItems))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/aac/1')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(testItems)
        return null
      })
  })

  test('returns 500 if hits an error', () => {
    getItems.mockImplementation(() => Promise.reject(new Error('Database Error')))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/aac/1')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})
