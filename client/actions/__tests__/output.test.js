import { addOutputItem, addOutputItems, removeLastOutputItem, clearOutput } from '../output.js'

describe('addOutputItem', () => {
  it('adds output item in the state', () => {
    const action = addOutputItem('testOutputItem')
    expect(action.type).toBe('SET_OUTPUT_ITEMS')
    expect(action.item).toBe('testOutputItem')
  })
})

describe('addOutputItems', () => {
  it('adds output items to the state', () => {
    const action = addOutputItems(['testOutputItem1', 'testOutputItem2'])
    expect(action.type).toBe('ADD_OUTPUT_ITEMS')
    expect(action.items).toEqual(['testOutputItem1', 'testOutputItem2'])
  })
})

describe('removeLastOutputItem', () => {
  it('removes last output item in the state', () => {
    const action = removeLastOutputItem('testOutputItems')
    expect(action.type).toBe('REMOVE_OUTPUT_ITEM')
    expect(action.items).toBe('testOutputItems')
  })
})

describe('clearOutput', () => {
  it('clears output items in the state', () => {
    const action = clearOutput()
    expect(action.type).toBe('CLEAR_OUTPUT')
  })
})
