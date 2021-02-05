import React from 'react'
import Body from 'components/layout/Body/Body'
import Products from 'screens/UserFlow/Products/Products'
import { Container } from './styles'
const Home = ({ products, addToCart }) => {
  return (
    <Body title='Our products'>
      <Container>
        <Products products={products} addToCart={addToCart} />
      </Container>
    </Body>
  )
}

export default Home
