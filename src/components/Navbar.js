import React from "react"; //impr
import PropTypes from "prop-types"; //impt

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.Title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                {props.About}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                {props.text}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  //prop types ham type of prop fix krr dete h jaise agar koi prop me string pass krega to hi aage badhega
  Title: PropTypes.string.isRequired, //isrequired me mtlb hai prop pass krna jaruri hai mtlb aap ye make sure krna chahte ho ki koi props undefined na ho
  About: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  Title: "Set title here", //default props h jab ham koi prop nhi denge to wo default ye wale consider krr lega
  About: "About text here",
};
