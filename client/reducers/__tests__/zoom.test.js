import zoomReducer from '../zoom'

import { changeZoom } from '../../actions/zoom'

describe('checks the reducer', () => {
  // eslint-disable-next-line jest/no-commented-out-tests
  // test('initial state is 130', () => {
  //   const state = zoomReducer(undefined, { type: 'INIT' })
  //   expect(state).toBe(testObj)
  // })
  test('SET_ZOOM sets the zoom', () => {
    const state = zoomReducer('150', changeZoom('110'))
    expect(state).toBe('110')
  })
})
