import React from 'react'
import { connect } from 'react-redux' 
import { createBook } from '../actions'

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] 

class BookForm extends React.Component {
  state = {
    input: '',
    category: CATEGORIES[0]
  }

  handleTitleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateBook({
      title: this.state.input,
      category: this.state.category
    })
    this.setState({
      input: ''
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={ this.state.input } onChange={this.handleTitleChange} placeholder="Enter a Book" />
        <select onChange={this.handleCategoryChange}>
          { CATEGORIES.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
        </select>
        <button>Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleCreateBook: (book)=> dispatch(createBook(book))
  }
}

export default connect(null, mapDispatchToProps)(BookForm)
