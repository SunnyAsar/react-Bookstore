import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions'
import styled from '@emotion/styled'

const BookItem = styled.div`
  background-color: white;
  padding: 32px 27px;
  margin: 15px 0;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  .category {
    color: #121212;
    font-size: 14px;
    opacity: 0.5;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 20px;
    margin-top: 4px;
    font-size: 22px;
  }
  button {
    color: #4386bf;
    background-color: white;
    font-size: 14px;
    cursor: pointer;
    padding: 5px 15px;
    border: 1px solid rgba(0,0,0,.1);
    &:hover {
      background-color: #4386bf;
      color: white;
    }
  }
`

const Book = ({ book, handleRemoveBook }) => {
  return (
    <BookItem>
      <div className='category'>{book.category}</div>
      <h3>{book.title}</h3>
      <button onClick={() => handleRemoveBook(book)}>Delete</button>
    </BookItem>
  )
}

const mapDispatchToProp = (dispatch) => ({
  handleRemoveBook: (book) => removeBook(dispatch, book)
})

export default connect(null, mapDispatchToProp)(Book)
