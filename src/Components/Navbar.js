import React from 'react'
import '../component_css/Navbar.css'


export default function Navbar() {
  return (

    <div>
         <nav className="nav-bar">
      <div className="nav-bar__logo">
        <h1 className="nav-bar__logo-text">Film-Folio</h1>
      </div>
      <ul className="nav-bar__menu">
        <li className="nav-bar__menu-item"><a href="/" className="nav-bar__menu-link">Home</a></li>
        <li className="nav-bar__menu-item"><a href="/about" className="nav-bar__menu-link">About</a></li>
        <li className="nav-bar__menu-item"><a href="/services" className="nav-bar__menu-link">Services</a></li>
        <li className="nav-bar__menu-item"><a href="/contact" className="nav-bar__menu-link">Contact</a></li>
      </ul>
      <div className="nav-bar__search">
        <input type="text" className="nav-bar__search-input" placeholder="Search..."/>
        <button className="nav-bar__search-button">Search</button>
      </div>
    </nav>
    </div>
  )
}


