import bookService from '../services/books'

export async function fetchBooks (dispatch) {
  dispatch({ type: 'START_LOADER' })
  const books = await bookService.getAll()
  dispatch({
    type: 'SET_BOOKS_COLLECTION',
    books
  })
  dispatch({ type: 'STOP_LOADER' })
}

export async function createBook (dispatch, book) {
  dispatch({ type: 'START_LOADER' })
  const newBook = await bookService.create(book)
  dispatch({
    type: 'CREATE_BOOK',
    book: newBook
  })
  dispatch({ type: 'STOP_LOADER' })
}

export async function removeBook (dispatch, book) {
  dispatch({ type: 'START_LOADER' })
  const removeBook = await bookService.delete(book.id)
  dispatch({
    type: 'REMOVE_BOOK',
    book
  })
  dispatch({ type: 'STOP_LOADER' })
}

export function changeBooksFilter (filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}
