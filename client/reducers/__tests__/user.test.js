import userReducer from '../user'

import { setUser, clearUser } from '../../actions/user'

const expectedEmptyUser = {
  auth0Id: null,
  email: null,
  token: null
}

const testState1 = {
  auth0Id: 'testAuth0Id1',
  email: 'testEmail1',
  token: 'testToken1'
}

const testState2 = {
  auth0Id: 'testAuth0Id2',
  email: 'testEmail2',
  token: 'testToken2'
}

describe('checks the reducer', () => {
  test('initial state is the above expectedInitialState', () => {
    const state = userReducer(undefined, { type: 'INIT' })
    expect(state).toEqual(expectedEmptyUser)
  })
  test('SET_USER sets the user details', () => {
    const state = userReducer(testState1, setUser(testState2))
    expect(state).toEqual(testState2)
  })
  test('CLEAR_USER remove the users details', () => {
    const state = userReducer(testState1, clearUser())
    expect(state).toEqual(expectedEmptyUser)
  })
})
