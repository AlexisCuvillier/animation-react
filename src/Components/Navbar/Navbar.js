import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <Link to='/'>LISTE</Link>
        <Link to='/stateanim'>STATE</Link>
        <Link to='/scroll'>SCROLL</Link>
    </nav>
  )
}
