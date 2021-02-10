import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from 'screens/Home/Home'
import MyCart from 'screens/UserFlow/MyCart/MyCart'
import CartDropdown from 'screens/UserFlow/CartDropdown/CartDropdown'
import Order from 'screens/UserFlow/Order/Order'
import data from 'data/data'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const { products } = data
  const history = useHistory()

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
  const handlePlacerOrder = () => {
    setCartItems([])
    history.push('/order')
  }

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home products={products} addToCart={addToCart} />
        </Route>
        <Route exact path='/checkout'>
          <MyCart cartItems={cartItems} addToCart={addToCart} removeCart={handleDeleteCart} checkout={handlePlacerOrder} />
        </Route>
        <Route exact path='/cart'>
          <CartDropdown cartItems={cartItems} removeCart={handleDeleteCart} />
        </Route>
        <Route extact path='/order' component={Order} />
      </Switch>
    </>
  )
}

export default App
