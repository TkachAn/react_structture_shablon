import s from "../../s.module.css";

export function AsideLeft({children, title, id}) {
    return (
        <aside id={id} className={s.asideLeft}>
            <h3>{title}</h3>
            {children}
        </aside>
    );
}