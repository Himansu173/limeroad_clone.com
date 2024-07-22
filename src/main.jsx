import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import UserContextProvider from './Context/UserContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <UserContextProvider theme={"light"}>
          <App />
        </UserContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
