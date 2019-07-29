import uuid from 'uuid/v1'

const SET_BOOKS_COLLECTION = 'SET_BOOKS_COLLECTION'
const CREATE_BOOK = 'CREATE_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'

const InitialState = []

const bookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_BOOKS_COLLECTION:
      return action.books.map(({ id, title, category }) => ({ id, title, category }))
    case CREATE_BOOK:
      const newBook = { ...action.book, id: uuid() }
      return [...state, newBook]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id)
    default:
      return state
  }
}

export default bookReducer
