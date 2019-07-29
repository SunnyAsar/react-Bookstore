import React from 'react'
import BookList from '../containers/BookList'
import BookForm from '../containers/BookForm'
import Navbar from '../components/Navbar'
import Loader from './loader'
import { fetchBooks } from '../actions'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount () {
    this.props.fetchBooks()
  }

  render () {
    return (
      <div>
        <Navbar />
        <Loader className='container'>
          <BookList />
          <BookForm />
        </Loader>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchBooks: () => fetchBooks(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)
