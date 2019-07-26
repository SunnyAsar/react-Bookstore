import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions'

const Book = ({ book, handleRemoveBook }) => {
  return (
    <tr key={ book.id }>
      <th >{book.id}</th>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button onClick={ () => handleRemoveBook(book) }>Delete</button></td>
    </tr>
  )
}

function mapDispatchToProp (dispatch) {
  return {
    handleRemoveBook: (book) => dispatch(removeBook(book))
  }
}

export default connect(null, mapDispatchToProp)(Book)
