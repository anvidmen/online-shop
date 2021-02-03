import React from 'react'
import Body from 'components/layout/Body/Body'
import Products from 'screens/UserFlow/Products/Products'
import { Container } from './styles'
const Home = () => {
  return (
    <Body title='Our items'>
      <Container>
        <Products />
        <Products />
        <Products />
      </Container>
    </Body>
  )
}

export default Home
