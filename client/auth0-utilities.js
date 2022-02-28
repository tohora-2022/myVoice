import { setUser } from './actions'

import store from './store'

export async function cacheUser (useAuth0, state) {
  console.log('hi')
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()

  if (isAuthenticated && !state?.token) {
    getAccessTokenSilently()
      .then((token) => {
        try {
          const userToSave = {
            auth0id: user.sub,
            email: user.email,
            token: token
          }
          store.dispatch(setUser(userToSave))
        } catch (err) {
          console.error(err)
        } return null
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
