import React from 'react'
import Book from '../components/Book'

const BookList = (props) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
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
