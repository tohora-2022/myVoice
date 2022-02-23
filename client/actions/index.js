export const SET_OUTPUT_ITEMS = 'SET_OUTPUT_ITEMS'

export function addOutputItem (item) {
  return {
    type: SET_OUTPUT_ITEMS,
    item
  }
}
