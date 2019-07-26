import React from 'react'
import styled from '@emotion/styled'

const Nav = styled.nav`
height:95px;
background: white;
color: #0290ff;
display: flex;
align-items: center;
box-shadow: 0 0 6px rgba(0,0,0,.1);
font-family: cursive;
letter-spacing:2px;
font-weight: 600

.container{
  margin-left: 20px;
}

`

const Navbar = () => {
  return (
    <Nav> 
      <div className="container">
        <h1> BookStore</h1>
      </div>
    </Nav>
  )
}

export default Navbar
