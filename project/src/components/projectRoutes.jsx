import React from 'react'
import Home from "../pages/Home"
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'


function ProjectRoutes() {
  const location = useLocation();
    const {currentUser} =useContext(AuthContext)

  return (

    <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route index element={currentUser? <Home/>: <Navigate to='/login'/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
    </Routes>
  )
}

export default ProjectRoutes