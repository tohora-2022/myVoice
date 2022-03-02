import { changeZoom } from '../zoom'

describe('changeZoom', () => {
  it('set the user in the store', () => {
    expect.assertions(2)
    const action = changeZoom('190')
    expect(action.type).toBe('SET_ZOOM')
    expect(action.change).toBe('190')
  })
})
