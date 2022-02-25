import { addOutputItem, removeLastOutputItem, clearOutput } from '../output.js'

describe('addOutputItem', () => {
  it('adds output item in the store', () => {
    const action = addOutputItem('testOutputItem')
    expect(action.type).toEqual('SET_OUTPUT_ITEMS')
    expect(action.item).toEqual('testOutputItem')
  })
})

describe('addOutputItems', () => {
  it('adds output items to store', () => {
    const action = addOutputItem(['testOutputItem1', 'testOutputItem2'])
    expect(action.type).toEqual('SET_OUTPUT_ITEMS')
    expect(action.items).toEqual(['testOutputItem1', 'testOutputItem2'])
  })
})

describe('removeLastOutputItem', () => {
  it('removes last output item in the store', () => {
    const action = removeLastOutputItem('testOutputItems')
    expect(action.type).toEqual('REMOVE_OUTPUT_ITEM')
    expect(action.items).toEqual('testOutputItems')
  })
})

describe('clearOutput', () => {
  it('clears output items in the store', () => {
    const action = clearOutput()
    expect(action.type).toEqual('CLEAR_OUTPUT')
  })
})
