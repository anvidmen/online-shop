import Header from 'components/layout/Header/Header'
import Footer from 'components/layout/Footer/Footer'
import Navbar from 'components/layout/Navbar/Nabvar'
import { Childrens, StyledBody } from './styles'

const Body = ({ children, title }) => {
  return (
    <StyledBody>
      <Navbar/>
      <Header title={title} />
      <Childrens>{children}</Childrens>
      <Footer />
    </StyledBody>
  )
}

export default Body
