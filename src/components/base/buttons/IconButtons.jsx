// src/elem/button/iconButtons.jsx

// (Импорты lucide-react остаются, но мы будем их использовать в других компонентах)
import styles from "./button.module.css";
import {
  Menu,
  X,
  Trash,
  Pencil,
  Plus,
  UserPlus,
  UserPen,
  LogOut,
} from "lucide-react";

/**
 * Базовый компонент иконочной кнопки.
 * Он выносит всю общую логику: тип, класс, title, размер иконки.
 * @param {object} props
 * @param {React.ElementType} props.Icon - Компонент иконки (например, X, Trash).
 * @param {function} props.onClick - Обработчик клика.
 * @param {string} props.title - Текст для title (подсказка).
 * @param {object} props.rest - Остальные пропсы.
 */
export const BaseIconButton = ({
  Icon, // Новый проп: сам компонент иконки
  onClick,
  title,
  ...props
}) => (
  <button
    onClick={onClick}
    type="button"
    className={styles.iconButton} // Общий класс
    title={title} // Общий title
    {...props}
  >
    {/* Рендерим переданный компонент Icon с заданным размером */}
    <Icon size={24} />
  </button>
);
// src/elem/button/iconButtons.jsx (продолжение)

// Внимание: handleSignOut можно вынести в отдельный хук или общую логику,
// но для простоты перенесем его сюда, как в вашем примере.
const handleSignOut = () => {
  console.log('Попытка выхода из системы...');
  // Ваша логика выхода
};

export const CloseIconButton = (props) => (
  <BaseIconButton
    Icon={X}
    title={props.title ?? "Закрыть"}
    {...props}
  />
);

export const DeleteIconButton = (props) => (
  <BaseIconButton
    Icon={Trash}
    title={props.title ?? "Удалить"}
    {...props}
  />
);

export const EditIconButton = (props) => (
  <BaseIconButton
    Icon={Pencil}
    title={props.title ?? "Редактировать"}
    {...props}
  />
);

export const AddIconButton = (props) => (
  <BaseIconButton
    Icon={Plus}
    title={props.title ?? "Добавить"}
    {...props}
  />
);

export const UserAddIconButton = (props) => (
  <BaseIconButton
    Icon={UserPlus}
    title={props.title ?? "Добавить пользователя"}
    {...props}
  />
);

export const UserEditIconButton = (props) => (
  <BaseIconButton
    Icon={UserPen}
    title={props.title ?? "Редактировать пользователя"}
    {...props}
  />
);

export const MenuIconButton = (props) => (
  <BaseIconButton
    Icon={Menu}
    title={props.title ?? "Меню"}
    {...props}
  />
);

// Для LogOutIconButton мы задаем фиксированный onClick, если он не передан
export const LogOutIconButton = ({ onClick = handleSignOut, ...props }) => (
  <BaseIconButton
    Icon={LogOut}
    onClick={onClick} // Используем переданный onClick или handleSignOut по умолчанию
    title={props.title ?? "Выход"}
    {...props}
  />
);

// Экспорты остаются прежними
/*
export {
  MenuIconButton,
  CloseIconButton,
  DeleteIconButton,
  EditIconButton,
  AddIconButton,
  UserAddIconButton,
  UserEditIconButton,
  LogOutIconButton,
};*/