import React from 'react'
import { Cart, Container, Item, Message, Price, Total, Wrapper } from './styles'

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
        <Container>
          <div>Id</div>
          <div>Name</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Total</div>
        </Container>
        {cartItems && cartItems.length ? (cartItems.map(item => (
          <Container key={item.id}>
            <Item>{item.id}</Item>
            <Item>{item.name}</Item>
            <Item>{item.qty}</Item>
            <Item>€ {item.price}</Item>
            <Item>€ {(item.price * item.qty - calculateDiscountCoffee(cartItems)).toFixed(2)}</Item>
            <Price>€ {calculateDiscountCoffee(cartItems).toFixed(2)}</Price>
          </Container>))) : (<Message>Your cart is empty</Message>)}
      </Wrapper>
      <Total>
        <p>Total</p><p>€ {calculateTotalPrice(cartItems).toFixed(2)}</p>
      </Total>
    </Cart>
  )
}

export default CartItems
