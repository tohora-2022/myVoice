import { combineReducers } from 'redux'

import category from './category'
import items from './items'
import categories from './categories'
import outputReducer from './Output'

export default combineReducers({
  output: outputReducer,
  category,
  categories,
  items
})
