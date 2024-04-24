import React from 'react'

function Signup() {
  return (
    <div>

        <h1>Signup</h1>
        <form id='signupContainer'>
          <label for='username'>Username:</label>
          <input type='text' id='username' name='username' required />
          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' required />
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required />
          <input type='submit' value='Signup' />
        </form>

        {/* if signup is successful, put the user into the User page */}
        {/* if signup is unsuccessful, show an error message */}
        <p>Already have an account? <a href='/login'>Login here</a></p>


    </div>
  )
}

export default Signup