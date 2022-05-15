import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Mobile Navbar */}
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="appointment">Appointment</Link>
              </li>
              <li>
                <Link to="review">Reviews</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                {user ? (
                  <button className="btn btn-ghost">Sign Out</button>
                ) : (
                  <Link to="login">Login</Link>
                )}
              </li>
              <li>{user && <Link to="dashboard">Dashboard</Link>}</li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctor Web </a>
        </div>
        <div className="navbar-end">
          <label tabIndex="1" for="dashboardSidebar" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        {/* desktop navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="appointment">Appointment</Link>
            </li>
            <li>
              <Link to="review">Reviews</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>{user && <Link to="dashboard">Dashboard</Link>}</li>
            <li>
              {user ? (
                <button onClick={logOut} className="btn btn-ghost">
                  Sign Out
                </button>
              ) : (
                <Link to="login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
