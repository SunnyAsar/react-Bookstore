import uuid from 'uuid/v1'

const CREATE_BOOK = 'CREATE_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'

const InitialState = [
  { id: uuid(), title: 'Quantum life', category: 'Sci-Fi' },
  { id: uuid(), title: 'Mind secrets', category: 'Learning' }
]

const bookReducer = (state = InitialState, action) => {
  switch (action.type) {
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
