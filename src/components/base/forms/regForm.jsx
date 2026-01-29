// src/components/RegistrationForm/RegistrationForm.jsx

import React, { useState, useCallback } from "react";
import {
  TextModInput,
  EmailModInput,
  PhoneInput,
  SecurePassInput,
} from "../inputs/inputsMod.jsx"; // Проверьте путь
import { SubmitModButton } from "../buttons/buttons.jsx"; // Проверьте путь

// Добавим простой валидатор для логина (не менее 3 символов)
const isValidLogin = (value) => value && value.length >= 3;

const INITIAL_FORM_DATA = {
  login: "",
  email: "",
  phone: "",
  password: null,
};

const INITIAL_FORM_VALIDITY = {
  login: false,
  email: false,
  phone: false,
  password: false,
};

export const RegistrationForm = () => {
  // 1. Состояние для данных формы
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    phone: "",
    password: null, // null, пока пароли не совпадут
  }); // 2. Состояние для валидности

  const [formValidity, setFormValidity] = useState({
    login: false,
    email: false,
    phone: false,
    password: false,
  }); // 0. НОВОЕ: Состояние для ключа перезагрузки
  const [resetKey, setResetKey] = useState(0); // 3. Обработчик изменений для всех полей

  const handleChange = useCallback((fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }, []); // 4. Обработчик валидации (приходит из ControlledInput)

  const handleValidation = useCallback((fieldName, isValid) => {
    setFormValidity((prev) => ({ ...prev, [fieldName]: isValid }));
  }, []); // 5. Обработчик Submit

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Отправка данных:", formData); // Здесь должна быть логика отправки на сервер (fetch/axios)

    alert("Форма отправлена! Проверьте консоль для данных."); // Сброс управляемого состояния
    setFormData(INITIAL_FORM_DATA);
    setFormValidity(INITIAL_FORM_VALIDITY); // ПЕРЕЗАГРУЗКА: Увеличиваем ключ, что заставит React уничтожить и пересоздать всю форму.
    setResetKey((prevKey) => prevKey + 1);
  }; // 6. Проверка общей валидности формы

  const isFormValid =
    isValidLogin(formData.login) && // Проверяем логин отдельно
    formValidity.email &&
    formValidity.phone &&
    formData.password !== null;

  return (
    <form
      key={resetKey} // <-- Ключ для принудительного перемонтирования
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Регистрация</h2> {/* Поле логина */}
      <TextModInput
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
      <EmailModInput
        label="Email"
        placeholder="example@mail.com"
        onChange={(e) => handleChange("email", e.target.value)}
        onValidation={(isValid) => handleValidation("email", isValid)}
      />
      {/* Поле Phone (ControlledInput) */}
      <PhoneInput
        label="Телефон"
        placeholder="+380xxxxxxxxx"
        onChange={(e) => handleChange("phone", e.target.value)}
        onValidation={(isValid) => handleValidation("phone", isValid)}
      />
      {/* Поле Пароля и Подтверждения (SecurePassInput) */}
      <SecurePassInput
        label="Пароль"
        confirmLabel="Повторите пароль"
        placeholder="Введите пароль"
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <SubmitModButton type="submit" disabled={!isFormValid}>
        Зарегистрироваться
      </SubmitModButton>
      <p style={{ fontSize: "12px", textAlign: "center" }}>
        Статус формы: **
        {isFormValid ? "ГОТОВА К ОТПРАВКЕ" : "НЕ ЗАПОЛНЕНА"}**
      </p>
    </form>
  );
};
