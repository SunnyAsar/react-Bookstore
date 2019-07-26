import React from 'react'
const Book = ({ book }) => {
  return (
    <tr key={ book.id }>
      <th >{book.id}</th>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  )
}

export default Book
