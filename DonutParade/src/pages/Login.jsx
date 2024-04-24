import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div className='Login'>

        <h1>Login</h1>
        <form id='loginContainer' method="post">
          <label for='username'>Username:</label>
          <input type='text' id='username' name='username' required />
          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' required />
          <input type='submit' value='Login' />
        </form>

        {/* if login is successful, put the user into the User page */}
        {/* if login is unsuccessful, show an error message */}
        <p>Don't have an account? <a href='/signup'>Sign up here</a></p>




    </div>
  )
}

export default Login