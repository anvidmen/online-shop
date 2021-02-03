import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Container, Routes, StyledNavbar } from './styles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Link to='/'>Shopping</Link>
        <Routes>
          <Link to='/'>Shop</Link>
          <Link to='/cart'>My cart</Link>
          <Link to='/cart'><ShoppingCartIcon /></Link>
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
