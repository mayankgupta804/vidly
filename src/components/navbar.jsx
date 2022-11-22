import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const items = props.menuItems;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        {items.map((item) => (
          <NavLink className="nav-link" to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
