import React, { useState } from "react";
import s from "./s.module.css";

export const SidebarNav = ({ menuData }) => {
  // Ключ для мгновенного закрытия всех details внутри
  const [menuKey, setMenuKey] = useState(0);

  const handleLinkClick = () => {
    // При клике на ссылку меняем ключ — всё меню вернется в закрытое состояние
    setMenuKey((prev) => prev + 1);
  };

  return (
    <aside className={`${s.sidebarNav} ${s.navContainer}`}>
      <div key={menuKey}>
        {menuData.map((category, idx) => (
          <details key={idx}>
            <summary>{category.title}</summary>
            <ul>
              {/* УРОВЕНЬ 2: Группы (например, Женская) */}
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

              {/* УРОВЕНЬ 2: Прямые ссылки (например, Контакты) */}
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
    </aside>
  );
};
