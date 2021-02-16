import React from 'react'
import { Cart, Container, Item, Message, Price, Total, Wrapper } from './styles'

const CartItems = ({ cartItems }) => {
  const calculateTotalPrice = cartItems => {
    return cartItems.reduce((totalItemsPrice, currentItem) =>
      totalItemsPrice + currentItem.totalPrice
    , 0)
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
            <Item>€ {item.discount.toFixed(2)}</Item>
            <Price>€ {item.totalPrice.toFixed(2)}</Price>
          </Container>))) : (<Message>Your cart is empty</Message>)}
      </Wrapper>
      <Total>
        <p>Total</p><p>€ {calculateTotalPrice(cartItems).toFixed(2)}</p>
      </Total>
    </Cart>
  )
}

export default CartItems
