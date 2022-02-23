import { combineReducers } from 'redux'

import category from './category'
import outputReducer from './Output'

export default combineReducers({
  output: outputReducer,
  category
})
