import s from "./s.module.css";
import { Link } from "react-router-dom";

export function SignIn() {
    return (
      <div className={s.invisible}>
        <Link to="/SignIn">
          <h5>Sign In</h5>  
        </Link>
      </div>
    );
}
export function SignUp() {
    return (
      <div className={s.invisible}>
        <Link to="/SignUp">
          <h5>Sign Up</h5>  
        </Link>
      </div>
    );
}