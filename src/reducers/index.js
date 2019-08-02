import { combineReducers } from 'redux'
import bookReducer from './books'
import filterReducer from './filter'
import loaderReducer from './loader'
import alertReducer from './alert'

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  loader: loaderReducer,
  alert: alertReducer
})

export default rootReducer
