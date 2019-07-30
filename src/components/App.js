import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions'
import BookList from '../containers/BookList'
import BookForm from '../containers/BookForm'
import Navbar from '../components/Navbar'
import Loader from './loader'
import Alert from './Alert'

class App extends React.Component {
  componentDidMount () {
    this.props.fetchBooks()
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Alert />
          <Loader>
            <BookList />
            <BookForm />
          </Loader>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks())
})

export default connect(null, mapDispatchToProps)(App)
