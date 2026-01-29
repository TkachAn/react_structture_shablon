// src/data/usersDB.js

// Имитация хранения пользователей (Начнем с одного тестового пользователя)
let users = [
  {
    login: "testuser",
    email: "test@example.com",
    phone: "+380111111111",
    password: "hashedpassword", // Хранить пароли в чистом виде опасно, но для имитации подойдет
  },
];

/**
 * Имитирует проверку уникальности логина и email.
 * @param {string} login
 * @param {string} email
 * @returns {{isLoginTaken: boolean, isEmailTaken: boolean}}
 */
export const checkUserExistence = (login, email) => {
  const isLoginTaken = users.some(
    (user) => user.login.toLowerCase() === login.toLowerCase()
  );
  const isEmailTaken = users.some(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  return { isLoginTaken, isEmailTaken };
};

/**
 * Имитирует сохранение нового пользователя в "базе данных".
 * @param {object} userData - Данные пользователя (login, email, phone, password)
 */
export const registerUser = (userData) => {
  // В реальном приложении здесь было бы хеширование пароля и запись в БД
  users.push(userData);

  // Вывод для проверки (можно удалить позже)
  console.log(
    "Новый пользователь зарегистрирован. Текущее количество пользователей:",
    users.length
  );
  console.log("Все пользователи:", users);
};

// Экспортируем данные для тестов
export const getAllUsers = () => users;

// Помните: при перезагрузке приложения (hot reload) этот массив сбросится до исходного!
