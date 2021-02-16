import React from 'react'
import { Amount } from './styles'
const CartQuantityIcon = ({ quantity = 0 }) => (
  <Amount>
    <div className='amount'>{quantity}</div>
    {console.log(quantity)}
  </Amount>
)

export default CartQuantityIcon
