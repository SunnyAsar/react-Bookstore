import React from 'react'
import BookList from '../containers/BookList'
import BookForm from '../containers/BookForm'
import { Provider } from 'react-redux'



import '../App.css'

function App () {
  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  )
}

export default App
