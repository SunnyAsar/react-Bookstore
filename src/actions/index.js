import bookService from '../services/books'
import {
  START_LOADER, STOP_LOADER, CREATE_BOOK,
  SET_BOOKS_COLLECTION, REMOVE_BOOK, CHANGE_FILTER,
  SHOW_ALERT, HIDE_ALERT
} from './actionConstants'
import { generateErrorText } from '../libs/helpers'

const startLoading = () => ({ type: START_LOADER })
const stopLoading = () => ({ type: STOP_LOADER })

export const setBooks = (books) => ({
  type: SET_BOOKS_COLLECTION,
  books
})

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book
})

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book
})

export const changeBooksFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter
})

export const showAlert = (message) => ({
  type: SHOW_ALERT,
  message
})

export const hideAlert = () => ({
  type: HIDE_ALERT
})

export const showTimeoutAlert = (message) =>
  dispatch => {
    dispatch(showAlert(message))
    setTimeout(() => {
      dispatch(hideAlert())
    }, 2500)
  }

const asyncActionHandler = async (dispatch, callback) => {
  dispatch(startLoading())
  try {
    await callback()
  } catch (error) {
    dispatch(showTimeoutAlert(generateErrorText(error)))
  } finally {
    dispatch(stopLoading())
  }
}

export const fetchBooks = () =>
  dispatch => asyncActionHandler(dispatch,
    async () => {
      const books = await bookService.getAll()
      dispatch(setBooks(books))
    }
  )

export const createBookAsync = (book) =>
  dispatch => asyncActionHandler(dispatch,
    async () => {
      const newBook = await bookService.create(book)
      dispatch(createBook(newBook))
    }
  )

export const removeBookAsync = (book) =>
  dispatch => asyncActionHandler(dispatch,
    async () => {
      const deletedBook = await bookService.delete(book.id)
      dispatch(removeBook(deletedBook))
    }
  )
