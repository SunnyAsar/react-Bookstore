import bookService from '../services/books'
import {
  START_LOADER, STOP_LOADER, CREATE_BOOK,
  SET_BOOKS_COLLECTION, REMOVE_BOOK, CHANGE_FILTER
} from './actionConstants'

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

const asyncActionHandler = async (dispatch, callback) => {
  dispatch(startLoading())
  try {
    await callback()
  } catch (error) {
    console.log(error)
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
