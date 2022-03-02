import { getCustomItems, postCustomItem } from '../apis/api'

export const SET_CUSTOM_ITEMS = 'SET_CUSTOM_ITEMS'
export const PUSH_CUSTOM_ITEM = 'PUSH_CUSTOM_ITEM'

export function setCustomItems (customItems) {
  return {
    type: SET_CUSTOM_ITEMS,
    customItems
  }
}

export function fetchCustomItems (token) {
  return dispatch => {
    return getCustomItems(token)
      .then(customItems => {
        dispatch(setCustomItems(customItems))
        return null
      })
  }
}

export function pushCustomItem (customItem) {
  return {
    type: PUSH_CUSTOM_ITEM,
    customItem
  }
}

export function addCustomItem (formData, token) {
  return dispatch => {
    return postCustomItem(formData, token)
      .then(customItem => {
        dispatch(pushCustomItem(customItem))
        return null
      })
  }
}
