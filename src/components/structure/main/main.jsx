import s from "../../structure/s.module.css";

export function Main({ children }) {
  return <main className={s.main}>{children}</main>;
}
export function MainHome({ children }) {
  return {children}
}