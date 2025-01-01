import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import bookstore from './Utilits/Redux/bookstore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={bookstore}>
    <App />
    </Provider>
  </StrictMode>,
)
