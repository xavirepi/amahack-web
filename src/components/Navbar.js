import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/amazhack.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img className="me-2" src={logo} alt="Amahack" height={40} />
          <span className="navbar-brand fw-bold h1 m-0 p-0">Amahack</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;