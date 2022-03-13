import { useMediaQuery } from "react-responsive"
import { MAX_WIDTH } from 'theme/Responsive'
import calculateTotalPrice  from 'utils/totalPrice'
import { Cart, Container, Item, Message, Price, Total, Wrapper } from './styles'

const CartItems = ({ cartItems }) => {
  const isSmallScreen = useMediaQuery(MAX_WIDTH)

  return (
    <Cart>
      <Wrapper>
        <Container>
          <div className="category">Category</div>
          <div>Article</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Total</div>
        </Container>
        {cartItems && cartItems.length ? (cartItems.map(item => (
          <Container key={item.id}>
            <Item visible={isSmallScreen} >{item.category}</Item>
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
