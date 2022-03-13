import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AppProvider from 'providers/AppProvider'
import './index.css'

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
)
