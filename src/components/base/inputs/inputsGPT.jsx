// src/components/base/inputs/inputsGPT.jsx
import React, { useState, useEffect, useCallback } from "react";
import styles from "./s.module.css";

// 1. Базовый компонент для обертки и стилизации (Uncontrolled/External Control)
// Используется для полей, где управление значением и изменениями полностью внешнее (например, PassInput, NumInput, TextInput, SelectInput)
export const BaseInput = ({
  label,
  className = "",
  status = "normal", // normal | accent | blocked | error
  errorMessage, // Отображаемое сообщение об ошибке
  id,
  children,
}) => {
  const isBlocked = status === "blocked";
  const isError = status === "error" || !!errorMessage; // Если есть errorMessage, считаем, что статус "error"

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      {React.cloneElement(children, {
        className: `${children.props.className || ""} ${styles[status]} ${
          isError ? styles.error : ""
        }`,
        disabled: isBlocked,
        id: id,
      })}
      {isError && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export const ControlledInput = ({
  initialValue = "",
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  onValidation,
  validator,
  validationErrorMessage = "Некорректный ввод",
  errorMessage: externalErrorMessage,
  type = "text",
  id,
  status: propStatus,
  ...restProps
}) => {
  const [value, setValue] = useState(initialValue === null ? "" : initialValue);
  const [internalErrorMessage, setInternalErrorMessage] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setValue(initialValue === null ? "" : initialValue);
  }, [initialValue]);

  const runValidation = useCallback(
    (currentValue) => {
      if (!validator) {
        if (onValidation) onValidation(true);
        return true;
      }
      const result = validator(currentValue);
      const isValid = result === true || result === undefined;
      if (onValidation) onValidation(isValid);
      if (!isValid) {
        const msg = typeof result === "string" ? result : validationErrorMessage;
        setInternalErrorMessage(msg);
      } else {
        setInternalErrorMessage("");
      }
      return isValid;
    },
    [validator, onValidation, validationErrorMessage]
  );

  const handleChange = useCallback(
    (event) => {
      const newValue = event?.target?.value ?? event;
      setValue(newValue);
      setInternalErrorMessage("");
      if (externalOnChange) {
        // Оставляем event-like объект для совместимости
        externalOnChange({ ...event, target: { ...((event && event.target) || {}), value: newValue } });
      }
    },
    [externalOnChange]
  );

  const handleBlur = useCallback(
    (event) => {
      setTouched(true);
      const currentValue = event?.target?.value ?? event;
      runValidation(currentValue);
      if (externalOnBlur) externalOnBlur(event);
    },
    [runValidation, externalOnBlur]
  );

  const combinedErrorMessage = externalErrorMessage || internalErrorMessage;
  const isErrorStatus = propStatus === "error" || !!combinedErrorMessage;
  const status = isErrorStatus ? "error" : propStatus;

  return (
    <BaseInput {...restProps} status={status} errorMessage={combinedErrorMessage} id={id}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...restProps}
        className={`${styles.input}`}
      />
    </BaseInput>
  );
};

// Валидации
export const isValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return emailRegex.test(email) ? true : "Введите корректный e-mail";
};

export const validatePhoneNumber = (number) => {
  const cleaned = ("" + number).replace(/\D/g, "");
  return cleaned.length === 12 ? true : "Введите корректный номер телефона (12 цифр)";
};

// Простые инпуты (внешнее управление)
export const TextInput = (props) => (
  <BaseInput {...props}>
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder || "Введите текст"}
      className={styles.input}
    />
  </BaseInput>
);

export const NumInput = (props) => (
  <BaseInput {...props}>
    <input
      type="number"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder || "Введите число"}
      className={styles.input}
    />
  </BaseInput>
);

const BasePassInput = ({
  label = "",
  value,
  onChange,
  placeholder = "Введите пароль",
  status = "normal",
  className = "",
  errorMessage = "",
  id,
  ...rest
}) => {
  return (
    <BaseInput label={label} className={className} status={status} errorMessage={errorMessage} id={id}>
      <input
        id={id}
        type="password"
        autoComplete="new-password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input}`}
        {...rest}
      />
    </BaseInput>
  );
};
export const PassInput = BasePassInput;

// **** SecurePassInput (исправлён) ****
// Теперь SecurePassInput НЕ вызывает onChange в useEffect и не создает циклов.
// Он управляет своим состоянием и вызывает onChange только в обработчиках ввода.
// Он принимает minLength и onChange (event-like or value), но не перезаписывает входящие prop value на каждом рендере.
export const SecurePassInput = ({
  label = "Пароль",
  confirmLabel = "Подтвердите пароль",
  onChange = () => {},
  initialValue = "",
  placeholder = "Введите пароль",
  status = "normal",
  className = "",
  errorText = "Пароли не совпадают",
  minLength = 6,
}) => {
  const [password, setPassword] = useState(initialValue || "");
  const [confirm, setConfirm] = useState("");
  const [internalError, setInternalError] = useState("");

  // Устанавливаем initialValue один раз при монтировании
  useEffect(() => {
    setPassword(initialValue || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally only on mount

  const handlePasswordChange = (e) => {
    const val = e?.target?.value ?? e;
    setPassword(val);
    // валидация живо
    if (val.length > 0 && val.length < minLength) {
      setInternalError(`Пароль должен содержать минимум ${minLength} символов.`);
      // уведомим родителя, что пока нет валидного пароля
      onChange({ target: { value: null } });
      return;
    }
    if (confirm && val !== confirm) {
      setInternalError(errorText);
      onChange({ target: { value: null } });
      return;
    }
    setInternalError("");
    if (val && val === confirm) {
      onChange({ target: { value: val } });
    } else {
      onChange({ target: { value: null } });
    }
  };

  const handleConfirmChange = (e) => {
    const val = e?.target?.value ?? e;
    setConfirm(val);
    if (password && password !== val) {
      setInternalError(errorText);
      onChange({ target: { value: null } });
      return;
    }
    if (password.length > 0 && password.length < minLength) {
      setInternalError(`Пароль должен содержать минимум ${minLength} символов.`);
      onChange({ target: { value: null } });
      return;
    }
    setInternalError("");
    if (password && password === val) {
      onChange({ target: { value: password } });
    } else {
      onChange({ target: { value: null } });
    }
  };

 }
