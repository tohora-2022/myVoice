import { combineReducers } from 'redux'

import activePageReducer from './activePage'
import category from './category'
import categories from './categories'
import outputReducer from './Output'
import zoomReducer from './zoom'

export default combineReducers({
  activePage: activePageReducer,
  output: outputReducer,
  category,
<<<<<<< HEAD
  zoom: zoomReducer
=======
  categories
>>>>>>> fc15f5c33d10641c21ee5493020cc390f26a3cdb
})
