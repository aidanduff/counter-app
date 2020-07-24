import React, { Component } from "react";

//stateless function component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="bade badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
