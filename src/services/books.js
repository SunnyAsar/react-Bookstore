import axios from 'axios'

const BASE_URL = process.env.BASE_URL || 'http://localhost:4000'

const BOOKS_URL = `${BASE_URL}/books`

const booksService = {}

booksService.getAll = () =>
  axios.get(BOOKS_URL)
    .then(res => res.data)

booksService.create = (book) =>
  axios.post(BOOKS_URL, book)
    .then(res => res.data)

booksService.delete = (id) =>
  axios.delete(`${BOOKS_URL}/${id}`)
    .then(res => res.data)

export default booksService
