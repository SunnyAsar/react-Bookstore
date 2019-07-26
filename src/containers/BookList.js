import React from 'react'
import Book from '../components/Book'
import { connect } from 'react-redux'

const BookList = (props) => {

  return (
    <div>
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
          {props.books.map((book) => (
            <Book book={book} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, null)(BookList)
