import React, { useEffect } from "react";
import "../styles/nav.css";
import "../styles/modal/loginmodal.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ setOpenModal, setRegisterModal }) {
  const user = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" class="nav-item nav-link">
              About Us
            </Link>
            <Link to="/contact" class="nav-item nav-link">
              Contact
            </Link>
          </div>
          {user ? (
            <div class="navbar-nav">
              <button
                class="nav-item nav-link"
                data-toggle="modal"
                data-target="#login-modal"
                className="openModalBtn"
                onClick={() => {
                  localStorage.removeItem("userdata");
                }}
              >
                logout
              </button>
              <Link to="/cart" class="nav-item nav-link">
                Cart
              </Link>
            </div>
          ) : (
            <div class="navbar-nav">
              <button
                class="nav-item nav-link"
                data-toggle="modal"
                data-target="#login-modal"
                className="openModalBtn"
                onClick={() => {
                  setOpenModal(true);
                  setRegisterModal(false);
                }}
              >
                Login
              </button>

              <button
                class="nav-item nav-link"
                data-toggle="modal"
                data-target="#register-modal"
                className="openRegisterModalBtn"
                onClick={() => {
                  setRegisterModal(true);
                  setOpenModal(false);
                }}
              >
                Register
              </button>
              {/* </Link> */}
              <Link to="/cart" class="nav-item nav-link">
                Cart
              </Link>
              <Link to="/track" class="nav-item nav-link">
                Track your product
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
