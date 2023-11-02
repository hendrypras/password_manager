import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Toaster } from 'react-hot-toast'
import { PasswordProvider } from './context/PasswordContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordProvider>
      <Toaster />
      <App />
    </PasswordProvider>
  </React.StrictMode>
)
