export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'

export function activePage (page) {
  return {
    type: SET_ACTIVE_PAGE,
    page
  }
}
