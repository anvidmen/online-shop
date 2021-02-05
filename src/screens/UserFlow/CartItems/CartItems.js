import React from 'react'
import { Cart, Item, Message, Price, Total, Wrapper } from './styles'

const CartItems = ({ cartItems }) => {
  const calculateDiscountCoffee = () => {
    let discount = 0
    const discCoffee = 2 / 3
    const discStrawberries = 0.50
    const discGreenTea = 2

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i]

      if (item.name === 'Coffee' && item.qty > 2) discount = item.price * item.qty * discCoffee
      else discount = item.price * item.qty

      if (item.name === 'Strawberries' && item.qty > 2) discount = (item.price * item.qty) - (discStrawberries * item.qty)
      else discount = item.price * item.qty

      if (item.name === 'Green tea' && item.qty === 2) discount = (item.price * item.qty) / discGreenTea
      else if (item.qty > 2) discount = (item.price * item.qty) - item.price
    }
    return discount
  }

  const calculateTotalPrice = cartItems => {
    let totalItemsPrice = 0

    for (const productSelection of cartItems) {
      const itemPrice = productSelection.price * productSelection.qty
      totalItemsPrice += itemPrice
    }
    return totalItemsPrice
  }

  return (
    <Cart>
      <Wrapper>
        <ul>
          <li>Id</li>
          <li>Name</li>
          <li>Quantity</li>
          <li>Price</li>
          <li>Discount</li>
          <li>Total</li>
        </ul>
        {cartItems && cartItems.length ? (cartItems.map(item => (
          <ul key={item.id}>
            <Item>{item.id}</Item>
            <Item>{item.name}</Item>
            <Item>{item.qty}</Item>
            <Item>€ {item.price}</Item>
            <Item>€ {(item.price * item.qty - calculateDiscountCoffee(cartItems)).toFixed(2)}</Item>
            <Price>€ {calculateDiscountCoffee(cartItems).toFixed(2)} </Price>
          </ul>

        )))
          : (<Message>Your cart is empty</Message>)}
      </Wrapper>
      <Total>
        <p>Total</p><p>€ {calculateTotalPrice(cartItems).toFixed(2)}</p>
      </Total>
    </Cart>
  )
}

export default CartItems
