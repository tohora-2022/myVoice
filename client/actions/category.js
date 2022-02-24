export const SET_CATEGORY = 'SET_CATEGORY'
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY'

export function setCategory (category) {
  return {
    type: SET_CATEGORY,
    category
  }
}

export function clearCategory () {
  return {
    type: CLEAR_CATEGORY
  }
}
