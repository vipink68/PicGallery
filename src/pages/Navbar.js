


import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
 export default function Navbar(props) {
   return (
    <>
    <nav variant="pills" defaultActiveKey="/home" id="nav_other" class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
    <a className="navbar-brand text-white fw-bold" id="logo" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
    <ul className="nav ms-auto ">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/upload">Upload</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/gallery">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    </>
   )
 }
 
 Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    
  }
 Navbar.defaultProps = {
    title: 'Set Title here'
 }