import React from 'react'
import Book from '../components/Book'
import CategoryFilter from '../components/CategoryFilter'
import { connect } from 'react-redux'

const BookList = ({ books, filter }) => {
  books = filter === 'All' ? books : books.filter(book => book.category === filter)
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
  books: state.books,
  filter: state.filter
})

export default connect(mapStateToProps, null)(BookList)
