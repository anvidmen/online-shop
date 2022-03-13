import Body from 'components/layout/Body/Body'
import Products from 'screens/UserFlow/Products/Products'
import { Container } from './styles'

const Home = () => {
  return (
    <Body title='Our products'>
      <Container>
        <Products/>
      </Container>
    </Body>
  )
}

export default Home
