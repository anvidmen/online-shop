import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'screens/Home/Home'
import MyCart from 'screens/UserFlow/MyCart/MyCart'
import CartDropdown from 'screens/UserFlow/CartDropdown/CartDropdown'
import data from 'data/data'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const { products } = data

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id)

    if (exist) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      ))
    } else setCartItems([...cartItems, { ...product, qty: 1 }])
  }

  const handleDeleteCart = () => {
    setCartItems([])
  }

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home products={products} addToCart={addToCart} />
        </Route>
        <Route exact path='/Checkout'>
          <MyCart cartItems={cartItems} addToCart={addToCart} removeCart={handleDeleteCart} />
        </Route>
        <Route exact path='/cart'>
          <CartDropdown cartItems={cartItems} removeCart={handleDeleteCart} />
        </Route>
      </Switch>
    </>
  )
}

export default App
