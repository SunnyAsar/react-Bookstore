import React from 'react'
import { connect } from 'react-redux'
import { createBook } from '../actions'
import styled from '@emotion/styled'

const Template = styled.div`
  form {
    display: flex;
  }
  select {
    width: 285px;
    margin: 0 34px;
  }
  input {
    flex: 1;
  }
`

const SubmitButton = styled.button`
  background-color: #0290ff;
  color: white;
  border: none;
  height: 45px;
  width: 184px;
  border-radius: 3px;
  font-size: 13px;
`

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
      <Template>
        <form onSubmit={this.handleSubmit}>
          <input value={ this.state.input } onChange={this.handleTitleChange} placeholder="Enter a Book" />
          <select onChange={this.handleCategoryChange}>
            { CATEGORIES.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
          </select>
          <SubmitButton>ADD BOOK</SubmitButton>
        </form>
      </Template>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleCreateBook: (book)=> dispatch(createBook(book))
  }
}

export default connect(null, mapDispatchToProps)(BookForm)
