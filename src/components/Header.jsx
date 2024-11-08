// src/components/Header.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png";

class Header extends Component {
  render() {
    return (
      <header className="bg-primary p-3 m-2 rounded-5 shadow-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <img className="w-25 " src={Logo} alt="Logo" />
          </div>

          <nav className="d-flex">
            <Link
              to="/Ecommerce"
              className="btn btn-light me-3 px-4 py-2 rounded-pill shadow-sm text-primary d-flex align-items-center"
            >
              <i className="fas fa-home me-2"></i> Accueil
            </Link>
            <Link
              to="/cart"
              className="btn btn-light px-4 py-2 rounded-pill shadow-sm text-primary d-flex align-items-center position-relative"
            >
              <i className="fas fa-shopping-cart me-2"></i> Panier
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
