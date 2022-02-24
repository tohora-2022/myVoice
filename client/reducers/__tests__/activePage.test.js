import activePageReducer from '../activePage'

import { activePage } from '../../actions/activePage'

describe('checks the reducer', () => {
  test('initial state is home', () => {
    const state = activePageReducer(undefined, { type: 'INIT' })
    expect(state).toEqual('home')
  })
  test('SET_ACTIVE_PAGE changes the active page.', () => {
    const state = activePageReducer('home', activePage('testActivePage'))
    expect(state).toEqual('testActivePage')
  })
})
