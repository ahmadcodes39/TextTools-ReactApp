import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        {props.heading}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link " href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Link
                </a>
              </li>
            </ul>
            <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-5 `}onClick={props.toggleStyle}>
            {`${props.mode==='light'?'dark':'light'}Mode`}
            </button>             
      </div>
    </nav>
  );
}
