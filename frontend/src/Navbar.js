import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-top mb-4">
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container p-2">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.png"
              alt="logo"
              style={{ width: "25%" }}
            />
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>

              {/* Login Button */}
              <li className="nav-item ms-3">
                <Link className="btn btn-outline-primary" to="/login">
                  Login
                </Link>
              </li>

              {/* Signup Button */}
              <li className="nav-item ms-2">
                <Link className="btn btn-primary" to="/signup">
                  Signup
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;