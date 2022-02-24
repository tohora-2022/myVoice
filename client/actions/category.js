import { getCategories } from '../apis/api'

export const DISPLAY_CATEGORIES = 'DISPLAY_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY'

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

export function fetchCategories () {
  return dispatch => {
    return getCategories()
      .then(categories => {
        dispatch(displayCategories(categories))
        return null
      })
  }
}
