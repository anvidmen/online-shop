import React from 'react'
import RemoveCart from 'screens/UserFlow/RemoveCart/RemoveCart'
import CartItems from 'screens/UserFlow/CartItems/CartItems'
import { Link } from 'react-router-dom'
import { CartDrop } from './styles'

const CartDropdown = ({ reference, cartItems, removeCart }) => {
  return (
    <CartDrop ref={reference}>
      <CartItems cartItems={cartItems} />
      <div className='button-items'>
        {console.log('hola')}
        {
          cartItems.length === 0
            ? <Link disabled className='checkout-button' to='/' onClick={(event) => event.preventDefault()}>Add a product!</Link>
            : <Link className='checkout-button' to='/checkout'>Check Out</Link>
        }
        <RemoveCart clearCart={removeCart} />
      </div>
    </CartDrop>
  )
}

export default CartDropdown
