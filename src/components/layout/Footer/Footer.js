import { Avatar, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Container, Information, Row, StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Information>
          <div>
            <h2>Shopping</h2>
            <Information>
              <p>Virtual store where you will find very good products..</p>
            </Information>
          </div>
          <div>
            <h2>Contact</h2>
            <Information>
              <Link href='https://www.linkedin.com/in/juan-om' target="_blank"><Avatar><LinkedInIcon /></Avatar></Link>
              <Link href='https://github.com/anvidmen' target="_blank"><Avatar><GitHubIcon /></Avatar></Link>
              <Link href='https://twitter.com/JuanDaOm' target="_blank"><Avatar><TwitterIcon /></Avatar></Link>
            </Information>
          </div>
        </Information>
        <Row>
          Copyright © <Link href='https://anvidmen.netlify.app/' target="_blank">Anvidmen</Link>{new Date().getFullYear()} | All Rights Reserved
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
