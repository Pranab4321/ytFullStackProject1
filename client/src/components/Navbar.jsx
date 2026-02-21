import React from 'react'
import "./Navbar.css"
import "../index.css"

import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'

export const Navbar = () => {

  const isLoggedIn = useAuth().isLoggedIn;
  console.log("here it defines: ",isLoggedIn)

  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">ThapaTechnical</NavLink>
        </div>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {isLoggedIn? <li><NavLink to="/logout">Logout</NavLink></li>
            : <>
              <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </>}
            
          </ul>
        </nav>
      </div>
    </header>
  )
}
