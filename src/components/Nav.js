import React from 'react';
import '../styles/Nav.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
        <nav>
            <p className="logo">Send!T</p>
            <ul>
                <li className="nav-item"><Link to="/" className="nav-link">blogs</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">our offices</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">about us</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">our services</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">FAQs</Link></li>
            </ul>
            <GiHamburgerMenu className="menu-icon"/>
        </nav>
    </div>
  )
}

export default Nav
