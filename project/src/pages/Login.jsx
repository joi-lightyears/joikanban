import React, {useState} from 'react'
import avt from '../assets/img/joitaro.jpg'
import {useNavigate, Link} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function Login() {


  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)

  const handleSubmit = async(e)=>{
      e.preventDefault()
      const email = e.target[0].value;
      const password = e.target[1].value;

      try{
        setLoading(true)
        setErr(false)
        await login(email, password)
        navigate("/")
      } catch(err){
          setErr(true);
          setLoading(false);
      }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">NTDkanban</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <div className='inputBox'>
                    <input type="email" required="required"/>
                    <span>email</span>
                </div>
                <div className='inputBox'>
                    <input type="password" required="required"/>
                    <span>password</span>
                </div>
                
                <button disabled={loading}>Sign in</button>
                
                {err && <span>Something went wrong</span>}
            </form>
            <p>Not have an account yet? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login