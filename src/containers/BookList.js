import React from 'react'
import Book from '../components/Book'
import CategoryFilter from '../components/CategoryFilter'
import { connect } from 'react-redux'

const BookList = ({ books, filter }) => {
  books = filter === 'All' ? books : books.filter(book => book.category === filter)
  return (
    <div>
      <CategoryFilter />
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book book={book} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    books: state.books,
    filter: state.filter
  }
}

export default connect(mapStateToProps, null)(BookList)
