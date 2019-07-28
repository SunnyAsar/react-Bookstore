import React from 'react'
import BookList from '../containers/BookList'
import BookForm from '../containers/BookForm'
import Navbar from '../components/Navbar'

function App () {
  return (
    <div>
      <Navbar />
      <div className="container">
        <BookList />
        <BookForm />
      </div>
    </div>
  )
}

export default App
