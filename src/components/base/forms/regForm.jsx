// src/components/RegistrationForm/RegistrationForm.jsx

import React, { useState, useCallback } from "react";
import {
  TextInput,
  EmailInput,
  PhoneInput,
  SecurePassInput,
} from "../../elem/inputs/inputs.jsx"; // Проверьте путь
import Button from "../Button/Button.jsx"; // Проверьте путь

// Добавим простой валидатор для логина (не менее 3 символов)
const isValidLogin = (value) => value && value.length >= 3;

const RegistrationForm = () => {
  // 1. Состояние для данных формы
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    phone: "",
    password: null, // null, пока пароли не совпадут
  });

  // 2. Состояние для валидности
  const [formValidity, setFormValidity] = useState({
    login: false,
    email: false,
    phone: false,
    password: false,
  });

  // 3. Обработчик изменений для всех полей
  const handleChange = useCallback((fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }, []);

  // 4. Обработчик валидации (приходит из ControlledInput)
  const handleValidation = useCallback((fieldName, isValid) => {
    setFormValidity((prev) => ({ ...prev, [fieldName]: isValid }));
  }, []);

  // 5. Обработчик Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Отправка данных:", formData);

    // Здесь должна быть логика отправки на сервер (fetch/axios)
    alert("Форма отправлена! Проверьте консоль для данных.");
  };

  // 6. Проверка общей валидности формы
  const isFormValid =
    isValidLogin(formData.login) && // Проверяем логин отдельно, т.к. он не ControlledInput
    formValidity.email &&
    formValidity.phone &&
    formData.password !== null; // SecurePassInput возвращает null, если невалиден

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Регистрация</h2>

      {/* Поле логина */}
      <TextInput
        label="Логин"
        placeholder="Введите логин (не менее 3 символов)"
        value={formData.login}
        onChange={(e) => handleChange("login", e.target.value)}
        status={
          !isValidLogin(formData.login) && formData.login.length > 0
            ? "error"
            : "normal"
        }
        errorMessage={
          !isValidLogin(formData.login) && formData.login.length > 0
            ? "Логин слишком короткий"
            : ""
        }
      />

      {/* Поле Email (ControlledInput) */}
      <EmailInput
        label="Email"
        placeholder="example@mail.com"
        onValidation={(isValid) => handleValidation("email", isValid)}
      />

      {/* Поле Phone (ControlledInput) */}
      <PhoneInput
        label="Телефон"
        placeholder="+380xxxxxxxxx"
        onValidation={(isValid) => handleValidation("phone", isValid)}
      />

      {/* Поле Пароля и Подтверждения (SecurePassInput) */}
      <SecurePassInput
        label="Пароль"
        confirmLabel="Повторите пароль"
        placeholder="Введите пароль"
        onChange={(e) => handleChange("password", e.target.value)}
      />

      <Button type="submit" disabled={!isFormValid}>
        Зарегистрироваться
      </Button>

      <p style={{ fontSize: "12px", textAlign: "center" }}>
        Статус формы: **{isFormValid ? "ГОТОВА К ОТПРАВКЕ" : "НЕ ЗАПОЛНЕНА"}**
      </p>
    </form>
  );
};

export default RegistrationForm;
