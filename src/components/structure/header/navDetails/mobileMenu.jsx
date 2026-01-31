import React, { useState } from "react";
import s from "./s.module.css";

export const MobileMenu = ({ menuData }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Состояние для принудительного сброса вложенных details
  const [menuKey, setMenuKey] = useState(0);

  const handleLinkClick = () => {
    setIsOpen(false);
    // Увеличиваем ключ, чтобы React пересоздал DOM-узлы внутри меню
    setMenuKey((prev) => prev + 1);
  };

  return (
    <nav className={s.mobileMenu}>
      <details open={isOpen} onToggle={(e) => setIsOpen(e.target.open)}>
        <summary className={s.burgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </summary>

        {/* key={menuKey} сбросит все раскрытые подразделы при клике */}
        <div className={`${s.mobileContent} ${s.navContainer}`} key={menuKey}>
          {menuData.map((category, idx) => (
            <details key={idx}>
              <summary>{category.title}</summary>
              <ul>
                {/* УРОВЕНЬ 2: Вложенные группы */}
                {category.items &&
                  category.items.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <details>
                        <summary>{sub.title}</summary>
                        <ul>
                          {sub.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <a href={link.href} onClick={handleLinkClick}>
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}

                {/* УРОВЕНЬ 2: Прямые ссылки */}
                {category.links &&
                  category.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} onClick={handleLinkClick}>
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </details>
          ))}
        </div>
      </details>
    </nav>
  );
};
