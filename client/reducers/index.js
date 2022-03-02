import { combineReducers } from 'redux'

import categories from './categories'
import outputReducer from './output'
import zoomReducer from './zoom'
import itemsReducer from './items'
import favouritesReducer from './favourites'
import customItems from './customItems'
import user from './user'

export default combineReducers({
  output: outputReducer,
  categories,
  user,
  zoom: zoomReducer,
  items: itemsReducer,
  favourites: favouritesReducer,
  customItems
})
