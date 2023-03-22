import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import ProjectRoutes from './components/projectRoutes'
import { AuthContextProvider } from './context/AuthContext'
import {BrowserRouter} from "react-router-dom"
import { store } from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <Provider store={store}>
        <ProjectRoutes />
      </Provider>
    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
