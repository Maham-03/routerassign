import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';

function Header(){

    return (
        <div className="header">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
    )
}

export default Header