export const SET_OUTPUT_ITEMS = 'SET_OUTPUT_ITEMS'
export const ADD_OUTPUT_ITEMS = 'ADD_OUTPUT_ITEMS'
export const REMOVE_OUTPUT_ITEM = 'REMOVE_OUTPUT_ITEM'
export const CLEAR_OUTPUT = 'CLEAR_OUTPUT'

export function addOutputItem (item) {
  return {
    type: SET_OUTPUT_ITEMS,
    item
  }
}

export function addOutputItems (items) {
  return {
    type: ADD_OUTPUT_ITEMS,
    items
  }
}

export function removeLastOutputItem (items) {
  return {
    type: REMOVE_OUTPUT_ITEM,
    items
  }
}

export function clearOutput () {
  return {
    type: CLEAR_OUTPUT
  }
}
