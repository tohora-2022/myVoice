import { combineReducers } from 'redux'

import activePageReducer from './activePage'
import category from './category'
import categories from './categories'
import outputReducer from './Output'
import zoomReducer from './zoom'
import itemsReducer from './items'

export default combineReducers({
  activePage: activePageReducer,
  output: outputReducer,
  category,
  categories,
  zoom: zoomReducer,
  items: itemsReducer
})
