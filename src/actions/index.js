import bookService from '../services/books'
import { START_LOADER, STOP_LOADER, CREATE_BOOK, SET_BOOKS_COLLECTION, REMOVE_BOOK, CHANGE_FILTER } from './actionConstants'

export const fetchBooks = async (dispatch) => {
  dispatch(startLoader())
  return (dispatch, getState) => {
    const books = bookService.getAll()
    dispatch(setBooks(books))
    dispatch(stopLoader)
  }
}

export const setBooks = (books) => ({
  type: SET_BOOKS_COLLECTION,
  books
})

export const createBook = async (dispatch, book) => {
  dispatch({ type: START_LOADER })
  try {
    const newBook = await bookService.create(book)
    dispatch({
      type: CREATE_BOOK,
      book: newBook
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({ type: STOP_LOADER })
  }
}

export const removeBook = async (dispatch, book) => {
  dispatch({ type: START_LOADER })
  try {
    await bookService.delete(book.id)
    dispatch({
      type: REMOVE_BOOK,
      book
    })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({ type: STOP_LOADER })
  }
}

export const changeBooksFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter
})

export const startLoader = () => ({ type: START_LOADER })
export const stopLoader = () => ({ type: STOP_LOADER })
