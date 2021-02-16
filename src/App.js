import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from 'screens/Home/Home'
import MyCart from 'screens/UserFlow/MyCart/MyCart'
import CartDropdown from 'screens/UserFlow/CartDropdown/CartDropdown'
import Order from 'screens/UserFlow/Order/Order'
import data from 'assets/data/data'

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const { products } = data
  const history = useHistory()

  const addToCart = product => {
    const exist = cartItems.find((item) => item.id === product.id)

    if (exist) {
      setCartItems(prevCartItems => {
        const quantity = exist.qty + 1
        const updatedCartItem = { ...exist, qty: quantity, totalPrice: quantity * product.price }
        calculateDiscount(updatedCartItem)

        return prevCartItems.map(item => item.id === product.id ? updatedCartItem : item)
      })
    } else {
      const newCartItem = { ...product, qty: 1, totalPrice: product.price, discount: 0 }
      calculateDiscount(newCartItem)
      setCartItems(prevCartItems => [...prevCartItems, newCartItem])
    }
  }

  const calculateDiscount = cartItem => {
    const { id, price, qty, totalPrice } = cartItem

    if (id === 'CF1' && qty >= 3) {
      cartItem.totalPrice = totalPrice * (2 / 3)
      cartItem.discount = totalPrice - cartItem.totalPrice
    } else if (id === 'SR1' && qty >= 3) {
      cartItem.totalPrice = qty * 4.50
      cartItem.discount = totalPrice - cartItem.totalPrice
    } else if (id === 'GR1' && qty > 1) {
      cartItem.totalPrice = (totalPrice * 0.5) + (price * 0.5 * (qty % 2))
      cartItem.discount = totalPrice - cartItem.totalPrice
    }
  }

  const handleDeleteCart = () => setCartItems([])

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
          <MyCart cartItems={cartItems} addToCart={addToCart} removeCart={handleDeleteCart} checkout={handlePlacerOrder} quantityItems={0} />
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
