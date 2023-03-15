import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import ProjectRoutes from './components/projectRoutes'
import { AuthContextProvider } from './context/AuthContext'
import {BrowserRouter} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <ProjectRoutes />
    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
