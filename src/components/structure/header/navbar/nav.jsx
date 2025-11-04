
//import s from '../../../structure/s.module.css'
import s from "./s.module.css";
//import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export function Navbar({ isMobile = false, isMenuOpen = false, closeMenu = () => {} }) {

    // Определяем, какой класс использовать
    const navClass = isMobile ? s.navbar_v : s.navbar;
    
    // Если это мобильное меню и оно закрыто, ничего не рендерим
    if (isMobile && !isMenuOpen) {
        return null;
    }

    return (
      <nav className={navClass}>
        <ul>
          <li className={s.invisible}>
            <NavLink
              className={({ isActive }) =>
                isActive ? s["active-link"] : s["inactive-link"]
              }
              to="/SignIn"
              onClick={isMobile ? closeMenu : undefined}
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? s["active-link"] : s["inactive-link"]
              }
              to="/"
              onClick={isMobile ? closeMenu : undefined}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? s["active-link"] : s["inactive-link"]
              }
              to="/contacts"
              onClick={isMobile ? closeMenu : undefined}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? s["active-link"] : s["inactive-link"]
              }
              to="/about"
              onClick={isMobile ? closeMenu : undefined}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}
