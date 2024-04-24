import React from 'react'

function Login() {
  return (
    <div className='Login'>

        <h1>Login</h1>
        <form>
          <label for='username'>Username:</label>
          <input type='text' id='username' name='username' required />
          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' required />
          <input type='submit' value='Login' />
        </form>



    </div>
  )
}

export default Login