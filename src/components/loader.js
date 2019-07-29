import React from 'react'
import { connect } from 'react-redux'

function Loader ({ isLoading, children }) {
  if (isLoading) return <div>Loading</div>
  return <div>{children}</div>
}

function mapStateToProps (state) {
  return { isLoading: state.loader }
}

export default connect(mapStateToProps, null)(Loader)
