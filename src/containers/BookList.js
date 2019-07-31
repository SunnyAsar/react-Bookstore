import React from 'react'
import Book from '../components/Book'
import CategoryFilter from '../components/CategoryFilter'
import { filterBooks } from '../helpers'
import { connect } from 'react-redux'

const BookList = ({ books }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <CategoryFilter />
      <div>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  books: filterBooks(state.books, state.filter)
})

export default connect(mapStateToProps, null)(BookList)
