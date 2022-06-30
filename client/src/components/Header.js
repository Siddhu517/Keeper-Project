import React from "react";
import { Link } from "react-router-dom";
import "../components/css/style.css";

export const Header = ({ handleSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand nav" to="/">
          <ion-icon name="logo-apple-appstore"></ion-icon>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                Keeper
              </Link>
            </li>
          </ul>
          <form className="d-flex position-absolute top-5 start-50 translate-middle-x w-50 h-75">
            <input
              className="form-control me-2 shadow search-box"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
              name="search"
              required
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
