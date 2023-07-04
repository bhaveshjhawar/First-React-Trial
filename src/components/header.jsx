import React from "react";
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary w-100 nav-fill"
        data-bs-theme={`${props.currentMode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div
            className="collapse navbar-collapse mx-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div class={`form-check form-switch text-${props.currentMode==='light'?'dark':'light'}`}>
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                {props.currentMode==='light'?'Go dark':'Go light'}
              </label>
            </div>
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Header;
