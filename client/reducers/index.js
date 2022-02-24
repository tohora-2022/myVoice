import { combineReducers } from 'redux'

import category from './category'
import outputReducer from './Output'
import zoomReducer from './zoom'

export default combineReducers({
  output: outputReducer,
  category,
  zoom: zoomReducer
})
