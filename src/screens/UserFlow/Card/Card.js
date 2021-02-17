import React from 'react'
import { CardContent, Image, StyleCard, StyledButton } from './styles'

const Card = ({ product, addToCart }) => {
  const { name, price, img, offer } = product
  return (
    <StyleCard>
      <span>{offer}</span>
      <div className='card-image'>
        <Image src={img} alt={name} />
      </div>
      <CardContent>
        <h2>{name}</h2>
        <h3>€ {price}</h3>
      </CardContent>
      <StyledButton className='styleButton' onClick={() => addToCart(product)}>
        Add to Cart
      </StyledButton>
    </StyleCard>
  )
}

export default Card
