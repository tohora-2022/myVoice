import { combineReducers } from 'redux'

import category from './category'
import categories from './categories'
import outputReducer from './Output'

export default combineReducers({
  output: outputReducer,
  category,
  categories
})
