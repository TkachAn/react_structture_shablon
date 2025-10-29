import s from './s.module.css';   

export function Container({children}) {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
}
