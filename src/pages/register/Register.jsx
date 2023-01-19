import React, { useRef, useState } from 'react'
import './register.scss'

function Register() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = ()=> {
    setEmail(emailRef.current.value)
  }
  const handleFinish = ()=> {
    setEmail(emailRef.current.value)
  }
  return (
    <div className='register'>
      <div className="top">
        <div className='wrapper'>
          <img
           className='logo'
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" 
           />
           <button className='loginButton'>Sign In</button>
        </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere, cancel anytime</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque laborum, maxime porro </p>
          {!email ? (
            <div className="input">
            <input type="email" placeholder='email address' ref={emailRef}/>
            <button className='registerButton' onClick={handleStart}>Get started</button>
          </div>
            ) : (
              <div className="input">
              <input type="password" placeholder='password' ref={passwordRef}/>
              <button className='registerButton' onClick={handleFinish}>Start</button>
            </div>
            )
          }
          
        </div>
        </div>
  )
}

export default Register
