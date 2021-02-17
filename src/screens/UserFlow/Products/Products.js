import React from 'react'
import Card from 'screens/UserFlow/Card/Card'

const Products = ({ products, addToCart }) => {
  return (
    <>
      {products && products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </>
  )
}

export default Products
