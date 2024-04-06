import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ErrorPage.css'

function ErrorPage() {
  return (
    <div className="ErrorPage">

        <h1>404 Error</h1>

        <p>Sorry, the page you are looking for does not exist.</p>

        <Link to="/">Go back to the homepage</Link>



    </div>
  )
}

export default ErrorPage