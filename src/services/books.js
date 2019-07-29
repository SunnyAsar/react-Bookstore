const BASE_URL = process.env.BASE_URL || 'http://localhost:4000'

const booksService = {}

booksService.getAll = function () {
  return fetch(`${BASE_URL}/books`, { mode: 'cors' })
    .then(res => res.json())
    .catch(errorHandler)
}

booksService.create = function (book) {
  return fetch(`${BASE_URL}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(res => res.json())
    .catch(errorHandler)
}

booksService.delete = function (id) {
  return fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
    mode: 'cors'
  }).then(res => res.json())
    .catch(errorHandler)
}

const errorHandler = (err) => console.log(err)

export default booksService
