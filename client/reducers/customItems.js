import { SET_CUSTOM_ITEMS, PUSH_CUSTOM_ITEM, POP_CUSTOM_ITEM } from '../actions'

const initialState = []

export default function customItems (state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOM_ITEMS:
      return action.customItems
    case PUSH_CUSTOM_ITEM:
      return [...state].concat([action.customItem])
    case POP_CUSTOM_ITEM:
      return [...state].filter(customItem => {
        return customItem.id !== action.idDeleted
      })
    default:
      return state
  }
}
