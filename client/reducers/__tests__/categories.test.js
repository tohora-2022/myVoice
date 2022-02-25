import categoriesReducer from '../categories'

import { displayCategories } from '../../actions/category'

describe('checks the reducer', () => {
  test('initial state is []', () => {
    const state = categoriesReducer(undefined, { type: 'INIT' })
    expect(state).toEqual([])
  })
  test('DISPLAY_CATEGORIES sets the categories', () => {
    const state = categoriesReducer(['oldTestCategories'], displayCategories(['newTestCategories1', 'newTestCategories2']))
    expect(state).toEqual(['newTestCategories1', 'newTestCategories2'])
  })
})
