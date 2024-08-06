import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Logo from "./Logo.png"

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={Logo}/>
        </Link>
      </div>
      <div className="items">
        <Link to="/" className="home">
          Home
        </Link>
        <a href="#exercises" className="exercises">Exercises</a>
      </div>
    </div>
  )
}

export default Navbar