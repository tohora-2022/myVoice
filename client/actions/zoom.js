export const SET_ZOOM = 'SET_ZOOM'

export function changeZoom (change) {
  return {
    type: SET_ZOOM,
    change
  }
}
