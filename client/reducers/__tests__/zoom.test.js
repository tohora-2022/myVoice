import zoomReducer from '../zoom'

import { changeZoom } from '../../actions/zoom'

describe('checks the reducer', () => {
  test('initial state is 130', () => {
    const state = zoomReducer(undefined, { type: 'INIT' })
    expect(state).toBe('130')
  })
  test('SET_ZOOM sets the zoom', () => {
    const state = zoomReducer('150', changeZoom('110'))
    expect(state).toBe('110')
  })
})
