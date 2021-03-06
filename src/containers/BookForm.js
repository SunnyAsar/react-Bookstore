import React from 'react'
import { connect } from 'react-redux'
import { createBookAsync } from '../actions'
import styled from '@emotion/styled'

const Template = styled.div`
  margin-bottom: 40px;
  h2 {
    font-weight: bold;
    font-size: 20px;
    color: #888;
    margin-top: 40px;
    padding-top: 29px;
    border-top: 1px solid #e8e8e8;
    margin-bottom: 19px;
  }
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
  cursor: pointer;
`

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] 

class BookForm extends React.Component {
  state = {
    input: '',
    category: CATEGORIES[0]
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createBookAsync({
      title: this.state.input,
      category: this.state.category
    }).then(
      this.setState({
        input: ''
      })
    )

  }

  render(){
    return (
      <Template>
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='input' value={ this.state.input } onChange={this.handleChange} placeholder="Enter a Book" />
          <select name='category' onChange={this.handleChange}>
            { CATEGORIES.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
          </select>
          <SubmitButton>ADD BOOK</SubmitButton>
        </form>
      </Template>
    )
  }
}

export default connect(null, { createBookAsync })(BookForm)
