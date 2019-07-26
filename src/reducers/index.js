import bookReducer from './books'
import filterReducer from './filter'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer
})

export default rootReducer
