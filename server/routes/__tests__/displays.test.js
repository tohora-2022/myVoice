const request = require('supertest')
const server = require('../../server')

const { getCategories, getItems, getAllItems } = require('../../db/displays')

jest.mock('../../db/displays')

const testCategories = [
  { id: '1', category: 'testCategory1' },
  { id: '2', category: 'testCategory2' },
  { id: '3', category: 'testCategory3' },
  { id: '4', category: 'testCategory4' },
  { id: '5', category: 'testCategory5' },
  { id: '6', category: 'testCategory6' },
  { id: '7', category: 'testCategory7' }
]

const testAllItemsSorted = {
  testCategory1: [
    { category: 'testCategory1', categoryId: '1', image: '/images/testCategory1/testImage1.png', itemId: '1', tag: 'testTag1', word: 'testWord1' },
    { category: 'testCategory1', categoryId: '1', image: '/images/testCategory1/testImage2.png', itemId: '2', tag: 'testTag1', word: 'testWord2' },
    { category: 'testCategory1', categoryId: '1', image: '/images/testCategory1/testImage3.png', itemId: '3', tag: 'testTag1', word: 'testWord3' }
  ],
  testCategory2: [
    { category: 'testCategory2', categoryId: '2', image: '/images/testCategory1/testImage4.png', itemId: '4', tag: 'testTag2', word: 'testWord4' },
    { category: 'testCategory2', categoryId: '2', image: '/images/testCategory1/testImage5.png', itemId: '5', tag: 'testTag2', word: 'testWord5' }
  ],
  testCategory3: [],
  testCategory4: [],
  testCategory5: [],
  testCategory6: [],
  testCategory7: []
}

const testItems = [
  { itemId: '1', word: 'testWord1', image: '/images/testCategory1/testImage1.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '2', word: 'testWord2', image: '/images/testCategory1/testImage2.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '3', word: 'testWord3', image: '/images/testCategory1/testImage3.png', tag: 'testTag1', categoryId: '1', category: 'testCategory1' },
  { itemId: '4', word: 'testWord4', image: '/images/testCategory1/testImage4.png', tag: 'testTag2', categoryId: '2', category: 'testCategory2' },
  { itemId: '5', word: 'testWord5', image: '/images/testCategory1/testImage5.png', tag: 'testTag2', categoryId: '2', category: 'testCategory2' }
]

beforeEach(() => jest.clearAllMocks())

describe('GET /api/v1/aac/displays/categories', () => {
  test('returns categories from database.', () => {
    getCategories.mockReturnValue(Promise.resolve(testCategories))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/aac/displays/categories')
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
      .get('/api/v1/aac/displays/categories')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('GET /api/v1/aac/displays/items', () => {
  test('returns items from database.', () => {
    getCategories.mockReturnValue(Promise.resolve(testCategories))
    getAllItems.mockReturnValue(Promise.resolve(testItems))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/aac/displays/items')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(testAllItemsSorted)
        return null
      })
  })

  test('returns 500 if hits an error', () => {
    getAllItems.mockImplementation(() => Promise.reject(new Error('Database Error')))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/aac/displays/items')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('GET /api/v1/aac/displays/:categoryId', () => {
  test('returns items from database.', () => {
    getItems.mockReturnValue(Promise.resolve(testItems))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/aac/displays/1')
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
      .get('/api/v1/aac/displays/1')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})
