// src/components/structure/header/header.jsx
import React, { useState } from "react";
import { Logo } from "./logo/logo.jsx";
import { Navbar } from "./navbar/nav.jsx";
import { SignIn } from "./auth/signin.jsx";
//import { SignUp } from "./sign_up/signup.jsx";
//import s from "../../structure/s.module.css";
import s from "./s.module.css";
import { Container } from "../container/container.jsx";
import { MenuIconButton } from "../../base/buttons/IconButtons.jsx";
import { CloseIconButton } from "../../base/buttons/IconButtons.jsx";

export function Header() {
  // 1. Добавляем состояние для отслеживания открытого/закрытого меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для переключения состояния
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Функция для закрытия меню (при клике на ссылку)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.flexbox_header}>
          <Logo />
          <Navbar isMobile={false} />
          <SignIn />

          {/* Блок с авторизацией и кнопкой меню */}
          <div className={s.flexbox_header_end}>
            {/* 3. Кнопка меню/закрытия для мобильных */}
            <div className={s.header_mobile_button}>
              {isMenuOpen ? (
                <CloseIconButton onClick={toggleMenu} />
              ) : (
                <MenuIconButton onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>
      </Container>
      {/* 4. Мобильная навигация */}
      {/* Рендерится, только если isMenuOpen === true */}
      <Navbar isMobile={true} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
}
