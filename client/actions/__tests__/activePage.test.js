import { activePage } from '../activePage.js'

describe('activePage', () => {
  it('sets activePage in the store', () => {
    const action = activePage('testActivePage')
    expect(action.type).toEqual('SET_ACTIVE_PAGE')
    expect(action.page).toEqual('testActivePage')
  })
})
