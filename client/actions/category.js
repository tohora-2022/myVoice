import { getCategories, getAllItems } from '../apis/api'

export const DISPLAY_CATEGORIES = 'DISPLAY_CATEGORIES'
export const SET_ITEMS = 'SET_ITEMS'

export function displayCategories (categories) {
  return {
    type: DISPLAY_CATEGORIES,
    categories
  }
}

export function setItems (items) {
  return {
    type: SET_ITEMS,
    items
  }
}

export function fetchCategories () {
  return dispatch => {
    return getCategories()
      .then(categories => {
        dispatch(displayCategories(categories))
        return null
      })
  }
}

export function fetchItems () {
  return dispatch => {
    return getAllItems()
    .then(items => {
      dispatch(setItems(items))
      return null
    })
  }
}