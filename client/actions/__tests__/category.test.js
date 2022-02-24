import { displayCategories, setCategory, clearCategory, displayItems, fetchCategories, fetchItems } from '../category.js'
import { getCategories, getItems } from '../../apis/api'

jest.mock('../../apis/api')

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

getCategories.mockReturnValue(Promise.resolve(testCategories))
getItems.mockReturnValue(Promise.resolve(testItems))

describe('displayCategories', () => {
  it('sets the displayed categories in the store', () => {
    const action = displayCategories(testCategories)
    expect(action.type).toEqual('DISPLAY_CATEGORIES')
    expect(action.categories).toEqual(testCategories)
  })
})

describe('setCategory', () => {
  it('sets selected category in the store', () => {
    const action = setCategory('testCategory')
    expect(action.type).toEqual('SET_CATEGORY')
    expect(action.categoryId).toEqual('testCategory')
  })
})

describe('clearCategory', () => {
  it('clears selected category in the store', () => {
    const action = clearCategory()
    expect(action.type).toEqual('CLEAR_CATEGORY')
  })
})

describe('displayItems', () => {
  it('sets the display items in the store.', () => {
    const action = displayItems(testItems)
    expect(action.type).toEqual('DISPLAY_ITEMS')
    expect(action.items).toEqual(testItems)
  })
})

describe('fetchCategories', () => {
  it('gets the categories and calls displayCategories', () => {
    const dispatch = jest.fn()
    return fetchCategories()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls[0][0].type).toEqual('DISPLAY_CATEGORIES')
        expect(dispatch.mock.calls[0][0].categories).toEqual(testCategories)
        return null
      })
  })
})

describe('fetchItems', () => {
  it('gets the items and calls displayItems', () => {
    const dispatch = jest.fn()
    return fetchItems(1)(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls[0][0].type).toEqual('DISPLAY_ITEMS')
        expect(dispatch.mock.calls[0][0].items).toEqual(testItems)
        return null
      })
  })
})
