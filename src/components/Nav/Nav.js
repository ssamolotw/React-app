import { useContext } from "react";
import "./Nav.css";
import { Link, NavLink, useLocation } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";

function Nav() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  const { theme, toogleTheme } = useContext(ThemeContext);


  const navLinks = [
    {
      path: "/posts",
      name: "POSTY",
    },
    {
      path: "/dashboard",
      name: "DASHBOARD",
    },
    {
      path: "/login",
      name: "LOGIN",
    },
  ];

  const navStyle = {
    backgroundColor: theme == 'light' ? 'bisque' : 'darkgrey',
    color: theme == 'light' ? 'black' : 'white'
  }
  return isLogin ? null : (
    <nav style={ navStyle }>
      <span>LOGO</span>

      <div className="links">
        {navLinks.map((navLink) => (
          <NavLink
          key={navLink.path}
            to={navLink.path}
            className={({ isActive }) =>
              isActive ? "text-yellow font-bold" : "text-gray"
            }
          >
            {navLink.name}
          </NavLink>
        ))}

        <a href="https://wp.pl">WP.PL</a>
      </div>
       <span>{theme}</span>
    </nav>
  );
}

export default Nav;
