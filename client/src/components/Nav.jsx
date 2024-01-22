import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <h1>Favorite Authors</h1>
        <div>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/authors/new">Add an author</Link>
        </div>
    </nav>
  )
}

export default Nav