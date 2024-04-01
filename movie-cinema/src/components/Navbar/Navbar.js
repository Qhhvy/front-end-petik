import {NavLink} from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/popular"}>Popular</NavLink>
        </li>
        <li>
          <NavLink to={"/top"}>Top Rated</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;