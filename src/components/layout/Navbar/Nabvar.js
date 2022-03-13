import { useContext } from 'react'
import { AppContext } from 'providers/AppProvider'
import { Link } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"
import calculateTotalPrice from 'utils/totalPrice'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HomeIcon from '@material-ui/icons/Home';
import GenericIcon from 'components/units/GenericIcon/GenericIcon'
import EuroIcon from '@material-ui/icons/Euro';
import { MAX_WIDTH } from 'theme/Responsive'
import { Container, Routes, StyledNavbar } from './styles'

const Navbar = () => {
  const [ cartItems ] = useContext(AppContext)
  const isSmallScreen = useMediaQuery(MAX_WIDTH)

  const numItems = () => {
    return cartItems.reduce((quantityItems, currentItem) =>
      quantityItems + currentItem.qty
    , 0)
  }

  return (
    <StyledNavbar>
      <Container>
        <Link to='/'>Store</Link>
        <Routes>
          <Link to='/'>
          {isSmallScreen ? <HomeIcon/> : "Home"}
          </Link>
          <Link to='/shopping-cart'>
            <ShoppingCartIcon />
            <GenericIcon calculateTotal={numItems()} />
            <EuroIcon/>
            <GenericIcon calculateTotal={calculateTotalPrice(cartItems).toFixed(2)}/>
          </Link>
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
