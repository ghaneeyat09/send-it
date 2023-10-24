import React from 'react'
import "../styles/Banner.css";
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="banner">
        <div className="wrapper">
            <div className="shippingText">
            <h1>shipping</h1>
            <h2>Nationwide shipping for personal and business use</h2>
            <p>Request a pickup or delivery from you or from the seller and we'll get it delivered to where you need it to go.</p>
            <button><Link to="/login" className="ban-btn">get started</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Banner
