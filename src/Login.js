import React from 'react'
import './Login.css'

function Login() {
const loginToApp = () => {};

const register = () => {}

  return (
    <div className="login">
        <img src="https://images.unsplash.com/photo-1592181572975-1d0d8880d175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGlua2VkaW58ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
       
    <form>
    <input placeholder="Full name (required if registering)" type="text"/>
    <input placeholder="Profile pic URL (optional)" type="text"  />
    <input placeholder="Email" type="email"/>
    <input placeholder="Password" type="password" />

    <button type="submit" onClick={loginToApp}>Sign In</button>
    </form>

    <p>Not a member? {""}
        <span className="login__register" onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login;