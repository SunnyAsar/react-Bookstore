import { SET_BOOKS_COLLECTION, CREATE_BOOK, REMOVE_BOOK } from '../actions/actionConstants'

const InitialState = []

const bookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_BOOKS_COLLECTION:
      return action.books.map(({ id, title, category }) => ({ id, title, category }))
    case CREATE_BOOK:
      return [...state, action.book]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id)
    default:
      return state
  }
}

export default bookReducer
