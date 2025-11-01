//import s from "../../../structure/s.module.css";
import s from "./s.module.css";
import { Link } from "react-router-dom";

export function NavbarV() {
  return (
    <nav className={s.navbar_v}>
      <ul>
        <li className={s.invisible}>
          <Link to="/SignIn">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/">Home!!!</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
