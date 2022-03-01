import { handleLogin } from './actions'
import { useSelector, useDispatch } from 'react-redux'

export async function cacheUser (useAuth0) {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()
  const state = useSelector(state => state.user)
  const dispatch = useDispatch()

  if (isAuthenticated && !state?.token) {
    try {
      const userToSave = {
        auth0id: user.sub,
        email: user.email,
        token: await getAccessTokenSilently()
      }
      dispatch(handleLogin(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
