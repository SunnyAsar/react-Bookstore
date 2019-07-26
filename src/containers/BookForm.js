import React from 'react'

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] 

class BookForm extends React.Component {

  state = {
    input: '',
    category: CATEGORIES[0]
  }
  render(){
    return (
      <form onSubmit="#">
        <input value={ this.state.input } placeholder="Enter a Book" />
        <select>
          { CATEGORIES.map((cat) => (<option value={cat} key={cat} > {cat} </option>)) }
        </select>
        <button>Submit</button>
      </form>
    )
  }
}

export default BookForm
