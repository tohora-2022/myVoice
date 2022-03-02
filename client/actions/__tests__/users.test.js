import { setUser, clearUser, handleLogin } from '../user'
import { addUser } from '../../apis/api'

jest.mock('../../apis/api')

describe('User situation changed on the store', () => {
  const fakeUser = { auth0Id: 'gmail|8789', email: 'hereweare@gmail.com', token: 1234 }

  describe('setUser', () => {
    it('set the user in the store', () => {
      expect.assertions(2)
      const action = setUser(fakeUser)
      expect(action.type).toBe('SET_USER')
      expect(action.user).toBe(fakeUser)
    })
  })

  describe('clearUser', () => {
    it('clears the user in the store', () => {
      expect.assertions(2)
      const action = clearUser(fakeUser)
      expect(action.type).toBe('CLEAR_USER')
      expect(action.user).toBeUndefined()
    })
  })
})

describe('Thunk function clearing the store', () => {
  const fakeUser = { auth0Id: 'gmail|8789', email: 'hereweare@gmail.com', token: 1234 }

  addUser.mockReturnValue(Promise.resolve(fakeUser))

  describe('handleLogin', () => {
    it('send the user to the server and calls displayCategories', () => {
      const dispatch = jest.fn()

      expect.assertions(2)
      return handleLogin()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalled()
          expect(dispatch.mock.calls[0][0].type).toBe('SET_USER')
          return null
        })
    })
  })
})
