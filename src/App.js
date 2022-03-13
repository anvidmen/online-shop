import { Route, Switch } from 'react-router-dom'
import Home from 'screens/Home/Home'
import MyCart from 'screens/UserFlow/MyCart/MyCart'
import CartDropdown from 'screens/UserFlow/CartDropdown/CartDropdown'
import Order from 'screens/UserFlow/Order/Order'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shopping-cart' component={MyCart} />
        <Route path='/cart' component={CartDropdown} />
        <Route path='/order' component={Order} />
      </Switch>
    </>
  )
}

export default App
