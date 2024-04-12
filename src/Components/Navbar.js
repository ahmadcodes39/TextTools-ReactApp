import React from "react";
// import {Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand mx-5" href="#">
        {props.heading}
      </a>
      <button
        className="navbar-toggler mx-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link mx-1 " href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link " to="/about">
                  About
                </a>
              </li> */}
            </ul>
            <button type="button " className={`btn btn-outline-light btn-${props.mode==='light'?'dark':'light btn-dark ' } mx-5 `}onClick={props.toggleStyle}>
            {`${props.mode==='light'?'dark':'light'}Mode`}
            </button>             
      </div>
    </nav>
  );
}
