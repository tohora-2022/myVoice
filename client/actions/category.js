import { getCategories, getItems } from '../apis/api'

export const DISPLAY_CATEGORIES = 'DISPLAY_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY'
export const DISPLAY_ITEMS = 'DISPLAY_ITEMS'

export function displayCategories (categories) {
  return {
    type: DISPLAY_CATEGORIES,
    categories
  }
}

export function setCategory (categoryId) {
  return {
    type: SET_CATEGORY,
    categoryId
  }
}

export function clearCategory () {
  return {
    type: CLEAR_CATEGORY
  }
}

export function fetchItems (id) {
  return dispatch => {
    return getItems(id)
      .then(items => {
        dispatch(displayItems(items))
        return null
      })
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

export function displayItems (items) {
  return {
    type: DISPLAY_ITEMS,
    items
  }
}
