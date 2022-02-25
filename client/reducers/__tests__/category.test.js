import categoryReducer from '../category'

import { setCategory } from '../../actions/category'

describe('checks the reducer', () => {
  test('initial state is empty string', () => {
    const state = categoryReducer(undefined, { type: 'INIT' })
    expect(state).toEqual('')
  })
  test('SET_CATEGORY sets the category', () => {
    const state = categoryReducer('testCategoryOld', setCategory('testCategoryNew'))
    expect(state).toEqual('testCategoryNew')
  })
})
