import React from 'react'
import { Amount } from './styles'
const CartQuantityIcon = ({ quantityItems }) => (
  <Amount>
    <div className='amount'>{quantityItems}</div>
    {console.log(quantityItems)}
  </Amount>
)

export default CartQuantityIcon
