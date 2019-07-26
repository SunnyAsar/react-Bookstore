import bookReducer from './books'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: bookReducer
})

export default rootReducer
