import React, { useRef, useState } from 'react'
import './login.scss'

function Register() {
  
  return (
    <div className='login'>
      <div className="top">
        <div className='wrapper'>
          <img
           className='logo'
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" 
           />
        </div>
        </div>
        <div className="container">
          <form action="">
            <h2>Sign In</h2>
            <input type="email" placeholder='Email or phone number'/>
            <input type="password" placeholder='Password'/>
            <button className='loginButton'>Sign In</button>
            <span>New to Netflix? <b>Sign up now</b></span>
            <small>
              This page is protected by Google reCAPTHA to ensure you're not a bot <b>Learn more</b>
            </small>
          </form>
        </div>
        </div>
  )
}

export default Register
