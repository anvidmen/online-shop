import { ButtonContainer, CardContent, Image, StyledButton, StyleCard  } from './styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';

const Card = ({ product, addToCart, removeItemCart }) => {
  const { description, img, name, offer, price } = product

  return (
    <StyleCard>
      {offer && 
        <span>{offer}
          <label htmlFor='description'>{description}</label>
        </span> 
      }
      <div className='card-image'>
        <Image src={img} alt={name} />
      </div>
      <CardContent>
        <h2>{name}</h2>
        <h3>€ {price}</h3>
      </CardContent>
      <ButtonContainer>
        <StyledButton colorButton="#08a6a6" aria-label="add to cart" className='styleButton'  onClick={() => addToCart(product)}>
          <AddShoppingCartIcon/>
        </StyledButton>
        <StyledButton colorButton="#ef1818a6"  aria-label="remove item" className='styleButton' onClick={() => removeItemCart(product)}>
          <DeleteIcon/>
        </StyledButton>
      </ButtonContainer>  
    </StyleCard>
  )
}

export default Card
