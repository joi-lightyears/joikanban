import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {signOut} from "firebase/auth"
import {auth} from "../firebase"


function ModalLogout({setShowModalLogout}) {

  const {currentUser} = useContext(AuthContext)
  const handleLogOut = () =>{
    signOut(auth)
    setShowModalLogout(false)
  }
  // console.log(currentUser)
  return (
    <div className="modal-logout">
      <div className="container">
        <div className="name" >
          {currentUser.displayName}
        </div>
        <div className="logout" onClick={handleLogOut}>
          Log out
        </div>
      </div>
    </div>
  )
}

export default ModalLogout