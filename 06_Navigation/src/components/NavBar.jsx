import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

  return (
    <nav>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/dashboard">Dashboard</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
    </nav>
  )
}

export default NavBar