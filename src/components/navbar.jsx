import React from "react";

//stateless function component
const NavBar = ({ totalCounters }) => {
  console.log("In Navbar - App");
  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="bade badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
