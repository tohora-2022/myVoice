import outputReducer from '../output'

import { addOutputItem, addOutputItems, removeLastOutputItem, clearOutput } from '../../actions/output'

describe('checks the reducer', () => {
  test('initial state is []', () => {
    const state = outputReducer(undefined, { type: 'INIT' })
    expect(state).toEqual([])
  })
  test('SET_OUTPUT_ITEMS add the item in the action', () => {
    const state = outputReducer(['testCategoryOld'], addOutputItem('testCategoryNew'))
    expect(state).toEqual(['testCategoryOld', 'testCategoryNew'])
  })
  test('ADD_OUTPUT_ITEMS add the items in the action to the state', () => {
    const state = outputReducer(['testCategoryOld'], addOutputItems(['testCategoryNew1', 'testCategoryNew2']))
    expect(state).toEqual(['testCategoryOld', 'testCategoryNew1', 'testCategoryNew2'])
  })
  test('REMOVE_OUTPUT_ITEM sets the output items to the new array', () => {
    const state = outputReducer(['testCategory1', 'testCategory2'], removeLastOutputItem(['testCategory1']))
    expect(state).toEqual(['testCategory1'])
  })
  test('CLEAR_OUTPUT clears the output item array', () => {
    const state = outputReducer(['testCategory1', 'testCategory2'], clearOutput())
    expect(state).toEqual([])
  })
})
