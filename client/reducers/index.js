import { combineReducers } from 'redux'

import outputReducer from './Output'

export default combineReducers({
  output: outputReducer
})
