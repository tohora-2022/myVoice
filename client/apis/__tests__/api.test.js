import nock from 'nock'
import { getCategories, getItems } from '../api.js'

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
      .get('/api/v1/aac/categories')
      .reply(200, testCategories)

    return getCategories()
      .then(categories => {
        scope.done()
        expect(categories).toEqual(testCategories)
        return null
      })
  })
})

describe('getItems', () => {
  it('should return a single categoriesItems', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/aac/1')
      .reply(200, testItems)

    return getItems(1)
      .then(items => {
        scope.done()
        expect(items).toEqual(testItems)
        return null
      })
  })
})
