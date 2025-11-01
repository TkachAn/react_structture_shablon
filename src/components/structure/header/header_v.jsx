// src/components/structure/header/header.jsx
import { Logo } from "./logo/logo.jsx";
import { SignIn } from "./auth/signin.jsx";
//import { SignUp } from "./sign_up/signup.jsx";
import s from "../../structure/s.module.css";


export function HeaderV() {
  return (
    <header className={s.header_v}>
  
        <div className={s.box_header}>
          <Logo />
          
          <SignIn />
        </div>

    </header>
  );
}
