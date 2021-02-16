import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartQuantityIcon from 'components/CartQuantityIcon/CartQuantityIcon'
import { Container, Routes, StyledNavbar } from './styles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Link to='/'>Shopping</Link>
        <Routes>
          <Link to='/'>Shop</Link>
          <Link to='/checkout'>
            <ShoppingCartIcon />
            <CartQuantityIcon />
          </Link>
          {/* <Link to='/cart'><ShoppingCartIcon /></Link> */}
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
