import React, {useState} from 'react'
import avt from '../assets/img/joitaro.jpg'
import {useNavigate, Link} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { updateProfile } from "firebase/auth";
import { boards } from '../data/data';

function Register() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const {signup} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    setLoading(true)
    setErr(false)
    try{

      const res = await signup(email, password)
      
      await updateProfile(res.user, {
        displayName,
        email,
      })

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
            displayName,
            email,
            boards,
      }) 
      navigate("/")

    }catch(err){
        setErr(true);
        setLoading(false);
        console.log(err)
    }
      
    setLoading(false)
  }


  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">NTDkanban</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <div className='inputBox'>
                    <input type="text" required="required"/>
                    <span>username</span>
                </div>
                <div className='inputBox'>
                    <input type="email" required="required"/>
                    <span>email</span>
                </div>
                <div className='inputBox'>
                    <input type="password" required="required"/>
                    <span>password</span>
                </div>
                
                <button disabled={loading}>Sign up</button>
                
                {err && <span>Something went wrong</span>}
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register