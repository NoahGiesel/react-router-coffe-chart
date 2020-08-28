import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navigation() {
  const style = {
    color: "white",
  };
  return (
    <nav>
      <h2>Navigation</h2>
      <ul className="nav-links">
        <Link style={style} to="/">
          <li>About</li>
        </Link>
        <Link style={style} to="/create">
          <li>Create</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
