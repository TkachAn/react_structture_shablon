import React, { useState } from "react";
import s from "./s.module.css";

export const HorizontalNav = ({ menuData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuKey, setMenuKey] = useState(0);

  const handleSummaryClick = (e, idx) => {
    e.preventDefault(); // Блокируем стандартное открытие браузером
    e.stopPropagation(); // Останавливаем всплытие
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleLinkClick = () => {
    setOpenIndex(null);
    setMenuKey((prev) => prev + 1);
  };

  return (
    <nav className={`${s.tabletNav} ${s.navContainer}`} key={menuKey}>
      {menuData.map((category, idx) => (
        <details key={idx} open={openIndex === idx}>
          <summary onClick={(e) => handleSummaryClick(e, idx)}>
            {category.title}
          </summary>
          <ul>
            {category.items &&
              category.items.map((sub, subIdx) => (
                <li key={subIdx}>
                  <details>
                    <summary>{sub.title}</summary>
                    <ul>
                      {sub.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          {/* Теперь клик по ссылке сработает штатно */}
                          <a href={link.href} onClick={handleLinkClick}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
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
    </nav>
  );
};
