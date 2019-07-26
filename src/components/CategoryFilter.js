import React from 'react'
import { changeBooksFilter } from '../actions'
import { connect } from 'react-redux'

const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] 
const CategoryFilter = (props) => {
  return (
    <div>
      <select onChange={(e) => props.handleFilterChange(e.target.value)}>
        {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
      </select>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    handleFilterChange: (filter) => {dispatch(changeBooksFilter(filter)) }
  }
}

export default connect(null, mapDispatchToProps)(CategoryFilter)
