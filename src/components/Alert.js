import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

const Template = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
`

const Alert = ({ showing, message }) => {
  if (!showing) return null

  return <Template>{message}</Template>
}

const mapStateToProps = (state) => ({
  showing: state.alert.show,
  message: state.alert.message
})

export default connect(mapStateToProps, null)(Alert)
