import { useContext } from 'react'
import { AppContext } from 'providers/AppProvider'
import data from 'assets/data/data'
import Card from 'screens/UserFlow/Card/Card'

const Products = () => {
  const [cartItems, setCartItems] = useContext(AppContext)
  const { products } = data

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

  const handleDeleteCartItem = (product) => {
    const exist = cartItems.find((item) => item.id === product.id)

    if(!exist) return
  
    setCartItems(prevCartItems => {
      const quantity = exist.qty - 1;
      const updatedCartItem = { ...exist, qty: quantity, totalPrice: quantity * product.price }
      const newCartItems = prevCartItems.map(item => item.id === product.id ? updatedCartItem : item)
      return newCartItems.filter(({qty}) => qty )
    })
  }

  return (
    <>
      {products && products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} removeItemCart={handleDeleteCartItem} />
      ))}
    </>
  )
}

export default Products
