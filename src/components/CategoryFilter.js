import React from 'react'
import { changeBooksFilter } from '../actions'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

const Template = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-right: 10px;
  }
`

const CATEGORIES = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi'
]

const CategoryFilter = (props) => {
  return (
    <Template>
      <span>Filter by:</span>
      <select onChange={e => props.handleFilterChange(e.target.value)}>
        {CATEGORIES.map(cat => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </Template>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: filter => dispatch(changeBooksFilter(filter))
})

export default connect(null, mapDispatchToProps)(CategoryFilter)
