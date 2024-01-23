import React from 'react'
import logo1 from '../images/logo1.png'
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header>
        <div className='nav-bar'>
            <img src={`${logo1}`} alt="logo" />
            <h4>WattWise</h4>
        </div>
        <ul>
            <li>Home</li>
            <li>Portal</li>
            <li>Article</li>
            <li>Profiles</li>
            <li>Product</li>
            <li>Contact Us</li>
            <li>About Us</li>
        </ul>
        <button>Log In</button>
        <FiSearch />
    </header>
  )
}

export default Header
