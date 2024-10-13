import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import counterstore from './redux/counterStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={counterstore}>
   <App />
   </Provider>
  </StrictMode>,
)
