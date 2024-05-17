import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Google Books Search
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-info m-2" to="/saved">
                See Your Books
              </Link>
              <button className="btn btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-info m-2" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
