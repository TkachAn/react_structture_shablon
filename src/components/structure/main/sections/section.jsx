// src/components/structure/Section/Section.jsx
import s from "./s.module.css";
import { Container } from "../../container/container";

export function Hero({ children }) {
  return <section className={s.hero}>{children}</section>;
}

export function Section({ children, title }) {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.section_title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
}
export function Article({ children, title }) {
  return (
    <article className={s.article}>
      <h3 className={s.article_title}>{title}</h3>
      {children}
    </article>
  );
}
export function AsideLeft({ children, title }) {
  return (
    <aside className={s.asideLeft}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}
export function AsideRight({ children, title }) {
  return (
    <aside className={s.asideRight}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}
