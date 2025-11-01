import s from "./s.module.css";

export function AsideLeft({ children, title }) {
  return (
    <aside className={s.asideLeft}>
      <h3>{title}</h3>
      {children}
    </aside>
  );
}
