import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
function Login() {
    const [inputText,setInputText]= useState('')
    const [inputEmail,setInputEmail]= useState('')
    const navigate = useNavigate()

    function onsubmit(e){
      e.preventDefault();
      navigate('/home',{replace:true});

      localStorage.setItem('username',inputText)
      localStorage.setItem('useremail',inputEmail)
    }
  return (
    <div className='login'>
        
        
        <form onSubmit={onsubmit}>
        <h2>Login/Register</h2>
            <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="type your name..."/>
            <input type='email' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder='type your email'/>
            <button type='submit'>Login/Register</button>
        </form>
    </div>
  )
}

export default Login