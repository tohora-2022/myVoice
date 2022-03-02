import { changeZoom } from '../zoom'

describe('changeZoom', () => {
  it('set the user in the store', () => {
    expect.assertions(2)
    const action = changeZoom({ width: '160', spacing: 6 })
    expect(action.type).toBe('SET_ZOOM')
    expect(action.change).toEqual({ width: '160', spacing: 6 })
  })
})
