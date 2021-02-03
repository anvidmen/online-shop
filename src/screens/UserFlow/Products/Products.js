import React from 'react'
import { Card, CardContent, Image } from './styles'
import { ItemOne, ItemTwo, ItemThree } from 'images/index'
import Button from 'components/units/Button/Button'

const Products = () => {
  return (
    <Card>
      <div className='card-image'>
        <Image src={ItemOne} alt='coffe' />
      </div>
      <CardContent>
        <h2>Coffe</h2>
        <h3>Price: 5.8€</h3>
      </CardContent>
      <Button
        text='Add to Cart'
        type='submit'
        className='styleButton'
      />
    </Card>
  )
}

export default Products
