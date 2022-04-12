import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand common-link"
          activeclassname="active"
        >
          Food App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link" activeclassname="active">
              Food Recipe
            </NavLink>
            <NavLink to="/nutrition" className="nav-link">
              Nutrition Api
            </NavLink>
            <NavLink to="/database" className="nav-link">
              Food Database
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
