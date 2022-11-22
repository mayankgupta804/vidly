import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const items = props.menuItems;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {items.map((item) => (
            <li className={getNavItemClasses}>
              <Link className="nav-link" to={item.path}>
                {item.name}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

function getNavItemClasses(item) {
  const currentPath = window.location.pathname;
  let classes = "nav-item";
  if (item.path === currentPath) {
    classes += " active";
  }
  return classes;
}

export default Navbar;
