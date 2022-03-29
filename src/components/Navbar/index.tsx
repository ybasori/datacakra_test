import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { resetAuthLogin } from "../../redux/actions/auth";
import logo from "./logo.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img alt="" src={logo} width="112" height="28" />
        </Link>

        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-item ${isActive && "is-active"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `navbar-item ${isActive && "is-active"}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/tourists"
            className={({ isActive }) =>
              `navbar-item ${isActive && "is-active"}`
            }
          >
            Tourists
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                className="button"
                onClick={() => dispatch(resetAuthLogin())}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
