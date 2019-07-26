import React from 'react'
import BookList from '../containers/BookList'
import BookForm from '../containers/BookForm'
import Navbar from '../components/Navbar'
import '../App.css'

function App () {
  return (
    <div>
      <Navbar />
      <BookList />
      <BookForm />
    </div>
  )
}

export default App
