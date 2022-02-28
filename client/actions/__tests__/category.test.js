import { displayCategories, fetchCategories } from '../category'
import { getCategories } from '../../apis/api'

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

getCategories.mockReturnValue(Promise.resolve(testCategories))

describe('displayCategories', () => {
  it('sets the displayed categories in the store', () => {
    const action = displayCategories(testCategories)
    expect(action.type).toBe('DISPLAY_CATEGORIES')
    expect(action.categories).toBe(testCategories)
  })
})

describe('fetchCategories', () => {
  it('gets the categories and calls displayCategories', () => {
    const dispatch = jest.fn()
    return fetchCategories()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls[0][0].type).toBe('DISPLAY_CATEGORIES')
        expect(dispatch.mock.calls[0][0].categories).toBe(testCategories)
        return null
      })
  })
})
