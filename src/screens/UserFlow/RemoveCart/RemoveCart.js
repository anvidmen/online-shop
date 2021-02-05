import React from 'react'
import { StyledButton } from 'screens/UserFlow/MyCart/styles'

const RemoveCart = ({ clearCart }) => {
  const handleRemoveCart = event => {
    event.preventDefault()

    clearCart()
  }

  return (
    <StyledButton className='clearCart' onClick={handleRemoveCart}>Clear Cart</StyledButton>
  )
}

export default RemoveCart
