import React from 'react'
import { Link } from 'react-router-dom'
import Body from 'components/layout/Body/Body'
import CartItems from 'screens/UserFlow/CartItems/CartItems'
import RemoveCart from 'screens/UserFlow/RemoveCart/RemoveCart'
import { ButtonItems, Container, ExtraButtons } from './styles'

const MyCart = ({ cartItems, removeCart, addToCart }) => {
  return (
    <Body title='Products in your cart'>
      <Container>
        <CartItems cartItems={cartItems} addToCart={addToCart} />
        <ButtonItems>
          <ExtraButtons>
            <RemoveCart className='clearCart' clearCart={removeCart} />
            <Link to='/'>Continue Shopping</Link>
            <Link to='/order'>Check Out</Link>
          </ExtraButtons>
        </ButtonItems>
      </Container>
    </Body>
  )
}

export default MyCart
