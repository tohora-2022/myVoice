import { combineReducers } from 'redux'

import categories from './categories'
import outputReducer from './Output'
import zoomReducer from './zoom'
import itemsReducer from './items'

export default combineReducers({
  output: outputReducer,
  categories,
  zoom: zoomReducer,
  items: itemsReducer
})
