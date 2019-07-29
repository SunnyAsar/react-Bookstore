import bookReducer from './books'
import filterReducer from './filter'
import loaderReducer from './loader'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  loader: loaderReducer
})

export default rootReducer
