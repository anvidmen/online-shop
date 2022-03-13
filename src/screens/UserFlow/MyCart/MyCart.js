import { useContext } from 'react'
import { AppContext } from 'providers/AppProvider'
import { Link } from 'react-router-dom'
import Body from 'components/layout/Body/Body'
import CartItems from 'screens/UserFlow/CartItems/CartItems'
import RemoveCart from 'screens/UserFlow/RemoveCart/RemoveCart'
import { ButtonItems, Container, ExtraButtons } from './styles'

const MyCart = () => {
  const [ cartItems, setCartItems ] = useContext(AppContext)
 
  const handleCheckout = () => {
    setCartItems([])
  }

  const handleDeleteCart = () => setCartItems([])

  return (
    <Body title='Products in your cart'>
      <Container>
        <CartItems cartItems={cartItems} />
        <ButtonItems>
          <ExtraButtons>
            { !!cartItems.length  &&<RemoveCart clearCart={ handleDeleteCart} /> }
            { !!cartItems.length  && <Link to='/'>Continue Shopping</Link> }
            { cartItems.length === 0 ? 
              <Link to='/'>Add a product!</Link> : 
              <Link to='/order' onClick={handleCheckout} >Check Out</Link>
            }
          </ExtraButtons>
        </ButtonItems>
      </Container>
    </Body>
  )
}

export default MyCart
