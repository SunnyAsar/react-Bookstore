import bookService from '../services/books'

export async function fetchBooks (dispatch) {
  dispatch({ type: 'START_LOADER' })
  const allBooks = await bookService.getAll()
  dispatch({
    type: 'SET_BOOKS_COLLECTION',
    allBooks
  })
  dispatch({ type: 'STOP_LOADER' })
}

export async function createBook (dispatch, book) {
  dispatch({ type: 'START_LOADER' })
  const newBook = await bookService.create(book)
  dispatch({
    type: 'CREATE_BOOK',
    newBook
  })
  dispatch({ type: 'STOP_LOADER' })
}

export function removeBook (book) {
  return {
    type: 'REMOVE_BOOK',
    book
  }
}

export function changeBooksFilter (filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}
