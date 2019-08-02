import Collection from '../libs/collection'

const TIMEOUT = 500

class Book {
  constructor ({ title, category }) {
    this.title = title
    this.category = category
  }
}

const bookCollection = new Collection(Book)

bookCollection.addItem({
  title: 'Quantum life',
  category: 'Sci-Fi'
})

bookCollection.addItem({
  title: 'Rambo, the book',
  category: 'Action'
})

const bookService = {}

bookService.getAll = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(bookCollection.getCollection())
    }, TIMEOUT)
  })

bookService.create = (book) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (book.title === '') reject(new Error(`Title: can't be blank`))
      resolve(bookCollection.addItem(book))
    }, TIMEOUT)
  })

bookService.delete = (id) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(bookCollection.removeItem(id))
    }, TIMEOUT)
  })

export default bookService
