import s from "./s.module.css";
import { SecurePassInput } from "../../components/base/inputs/inputsMod.jsx";
import { useState } from "react";


export function Registration() {
  const [userPassword, setUserPassword] = useState(null);
  return (
    <>
      <SecurePassInput
        label="Новый пароль"
        confirmLabel="Повторите"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <form className={s.form}>Registration Pass: {userPassword}</form>
    </>
  );
}
