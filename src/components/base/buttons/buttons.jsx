// src/base/buttons/buttons.jsx

import styles from "./button.module.css";
import classNames from "classnames"; // Теперь используем!

/**
 * Базовый компонент кнопки с общей логикой и стилями.
 * @param {object} props
 * @param {function} props.onClick - Обработчик клика.
 * @param {React.ReactNode} props.children - Содержимое кнопки.
 * @param {'normal' | 'blocked' | string} [props.status='normal'] - Статус кнопки для стилей/дизейбла.
 * @param {'submit' | 'button'} [props.type='button'] - Тип кнопки.
 * @param {string | object} [props.className] - Дополнительные классы.
 * @param {object} props.rest - Остальные пропсы HTML-элемента <button>.
 */
export const BaseButton = ({
  onClick,
  children,
  status = "normal",
  type = "button",
  className, // Добавляем возможность пробросить внешние классы
  ...props
}) => (
  <button
    onClick={onClick}
    type={type}
    className={classNames(
      styles.baseButton, // Статический базовый класс
      styles[status], // Динамический класс, зависящий от status
      className // Любые внешние классы, которые могут прийти
    )}
    disabled={status === "blocked"}
    {...props}
  >
    {children}
  </button>
);
// src/elem/buttons/buttons.jsx (продолжение)

export const SubmitButton = (props) => (
  <BaseButton
    type="submit"
    children={props.children ?? "Сохранить"}
    {...props}
  />
);
export const SubmitModButton = ({
  children,
  disabled,
  type = "button",
  className = "",
  ...props
}) => {
  // Вычисляем класс динамически
  const buttonClass = `${styles.submitButton} ${className} 
                         ${disabled ? styles.disabled : styles.accent}`;
  // Предполагается, что стили accent делают кнопку синей/активной

  return (
    <button
      type={type}
      disabled={disabled} // Этот пропс делает кнопку некликабельной
      className={buttonClass} // Этот класс меняет внешний вид
      {...props}
    >
      {children}
    </button>
  );
};
export const DeleteButton = (props) => (
  <BaseButton
    children={props.children ?? "Удалить"}
    {...props}
  />
);

export const AddButton = (props) => (
  <BaseButton
    children={props.children ?? "Добавить"}
    {...props}
  />
);

export const EditButton = (props) => (
  <BaseButton
    children={props.children ?? "Изменить"}
    {...props}
  />
);

