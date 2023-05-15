import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import GlobalStyles from './globalStyles'
import UserProvider from './Context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>,
)
