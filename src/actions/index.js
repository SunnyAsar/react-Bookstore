import bookService from '../services/books'

export const fetchBooks = async (dispatch) => {
  dispatch({ type: 'START_LOADER' })
  try {
    const books = await bookService.getAll()
    dispatch({
      type: 'SET_BOOKS_COLLECTION',
      books
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({ type: 'STOP_LOADER' })
  }
}

export const createBook = async (dispatch, book) => {
  dispatch({ type: 'START_LOADER' })
  try {
    const newBook = await bookService.create(book)
    dispatch({
      type: 'CREATE_BOOK',
      book: newBook
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({ type: 'STOP_LOADER' })
  }
}

export const removeBook = async (dispatch, book) => {
  dispatch({ type: 'START_LOADER' })
  try {
    await bookService.delete(book.id)
    dispatch({
      type: 'REMOVE_BOOK',
      book
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({ type: 'STOP_LOADER' })
  }
}

export const changeBooksFilter = async (filter) => {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}
