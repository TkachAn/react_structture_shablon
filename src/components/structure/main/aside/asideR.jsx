import s from "../../s.module.css";

export function AsideRight({children, title}) {
    return (
        <aside className={s.asideRight}>
            <h3>{title}</h3>
            {children}
        </aside>
    );
}