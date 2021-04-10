import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/amazhack.svg'

const Navbar = () => {
  return (
    <header className="Navbar bg-dark py-3 shadow-lg">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <Link to="/" className="d-flex align-items-center text-light text-decoration-none">
            <img className="me-2" src={logo} alt="Amahack" height={40} />
            <span className="fw-bold h5 m-0">Amahack</span>
          </Link>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <NavLink className="me-3 py-2 text-light text-decoration-none" to="/signin" exact>
              Sign in
            </NavLink>
            <NavLink className="me-3 py-2 text-light text-decoration-none" to="/register" exact>
              Register
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;